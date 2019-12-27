import { hot } from 'react-hot-loader/root'
// import "core-js/stable";
import App from '@src/components/layout/spa';
import Main from './index.jsx';

// redux相关
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from '@src/redux';

const logger = createLogger();

const Entry = EASY_ENV_IS_DEV ? hot(Main) : Main;

export default new App({
  Entry,
  createRouter: function() {
    return [];
  },
  createStore: function(initalState) {
    return createStore(reducer, initalState, applyMiddleware(thunk, logger));
  },
}).bootstrap();

