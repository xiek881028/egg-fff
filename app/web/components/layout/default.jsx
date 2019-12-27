import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import "regenerator-runtime/runtime";
// import ErrorBoundary from '@src/components/ErrorBoundary';
import '@src/styles/theme.less';

export default class Layout extends Component {
  // UNSAFE_componentWillMount() {
  //   if(!EASY_ENV_IS_NODE) {
  //     window.onerror = () => {
  //       // 程序报错重渲染根节点为报错页
  //       ReactDOM.render(
  //         <ErrorBoundary hasError={true} />, document.getElementById('app'));
  //       return false;
  //     };
  //   }
  // }
  render() {
    if (EASY_ENV_IS_NODE) {
      return <html>
        <head>
          <title>{this.props.title}</title>
          <meta charSet="utf-8"></meta>
          <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui"></meta>
          <meta name="keywords" content={this.props.keywords}></meta>
          <meta name="description" content={this.props.description}></meta>
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"></link>
        </head>
        <body><div id="app">{this.props.children}</div></body>
      </html>;
    }
    return this.props.children;
  }
}
