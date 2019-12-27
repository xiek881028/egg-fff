import React, { Component } from 'react';
import { Button } from 'antd';
import './index.scss';

class Result extends Component {
  constructor(props) {
    super(props);
  };
  render() {
    return (
      <div styleName="result-wrap">
        <i styleName={`icon crash`}></i>
        <span styleName="text">喔唷，页面崩溃啦！</span>
        <Button type="primary" onClick={e => {
          location.reload();
        }}>刷新页面</Button>
      </div>
    );
  }
}

export default Result;
