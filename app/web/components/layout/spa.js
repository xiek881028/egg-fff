import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, StaticRouter } from 'react-router-dom';
import { matchRoutes } from 'react-router-config';
import ErrorBoundary from '@src/components/ErrorBoundary';

class App {

  constructor(config) {
    this.config = config;
  }

  client(config) {
    console.log('~~~~~~~~client~~~~~~~');
    const { Entry, createStore } = config;
    const store = createStore(window.__INITIAL_STATE__);
    const url = store.getState().url;
    const mode = store.getState().mode;
    const root = document.getElementById('app');
    const render = () => {
      ReactDOM.render(
        <ErrorBoundary>
          <Provider store={store}>
            <BrowserRouter>
              <Entry url={url} mode={mode} />
            </BrowserRouter>
          </Provider>
        </ErrorBoundary>,
        root);
    }

    render();

    if (EASY_ENV_IS_DEV) {
      module.hot.accept(() => {
        render();
      });
    }
  }

  server(config) {
    console.log('~~~~~~~~server~~~~~~~');
    return context => {
      const { Entry, createRouter, createStore } = config;
      const url = context.state.url;
      const router = createRouter();
      const matchRoute = matchRoutes(router, url);
      const promises = matchRoute.map(({ route }) => {
        const asyncData = route.component.asyncData;
        return asyncData instanceof Function ? asyncData(context, route) : Promise.resolve(null)
      });
      return Promise.all(promises).then(list => {
        const data = list.reduce((item, result) => {
          return Object.assign(result, item);
        }, {});
        Object.assign(context.state, data);
        const store = createStore(context.state);
        return () => {
          return (
            <ErrorBoundary>
              <Provider store={store}>
                <StaticRouter location={url} context={{}}>
                  <Entry url={url} />
                </StaticRouter>
              </Provider>
            </ErrorBoundary>
          );
        }
      });
    };
  }


  bootstrap() {
    if (EASY_ENV_IS_NODE) {
      return this.server(this.config);
    }
    return this.client(this.config);
  }
}

export default App;
