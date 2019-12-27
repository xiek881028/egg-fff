import React, { Component } from 'react';
import Link from '@src/components/Link';
import Layout from '@src/components/layout/default';
import './index.scss';

export default class HomeIndex extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // console.log('----componentDidMount-----');
  }

  render() {
    return <Layout>
      <h3 className="aaa">{this.props.title}</h3>
      <div className="aaa">当前访问的id是：{this.props.id}</div>
      <div>
        <Link to={`/demo/${this.props.mode}`}>点我返回首页</Link>
      </div>
    </Layout>;
  }
}
