import React, { Component } from 'react';
import { Button } from 'antd';
import { urlPrefix } from '@root/config.user.js';
import { withRouter } from 'react-router-dom';
import './index.scss';

class Result extends Component {
  constructor(props) {
    super(props);
  }
  typeText = {
    notFount: {
      title: '抱歉，找不到此页面~',
      btn: '返回首页',
    },
    updateWeb: {
      title: '您的浏览器版本过低，请升级浏览器。',
      btn: '下载谷歌浏览器',
    },
    welcome: {
      title: '欢迎登录中国东信系统base模板',
      btn: null,
    },
    noPermission: {
      title: '抱歉，您没有权限访问该页面！',
      btn: '返回首页',
    },
  };
  render() {
    const { type, text, btnText, onClick } = this.props;
    const txt = text ? text : this.typeText[type].title;
    const btn = btnText ? btnText : this.typeText[type].btn;
    return (
      <div styleName="result-wrap">
        <i styleName={`icon ${type}`}></i>
        <span styleName="text">{txt}</span>
        {
          btn ? (
            <Button type="primary" onClick={e => {
              if (onClick) {
                onClick();
              } else {
                switch (type) {
                  case 'notFount':
                    this.props.history.replace(`${urlPrefix}/`);
                    break;
                  case 'updateWeb':
                    window.open('https://www.google.com/intl/zh-CN/chrome/');
                    break;
                  case 'noPermission':
                    this.props.history.replace(`${urlPrefix}/`);
                    break;
                }
              }
            }}>{btn}</Button>
          ) : null
        }
      </div>
    );
  }
}

export default withRouter(Result);
