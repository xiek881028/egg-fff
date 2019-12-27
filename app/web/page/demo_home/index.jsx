import React, { Component } from 'react';
import Layout from '@src/components/layout/default';
import Link from '@src/components/Link';
import Axios from 'axios';
import './index.scss';

export default class HomeIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
    };
  }
  async componentDidMount() {
    console.log(`~~~~~~123~~~~~`, window);
  }

  render() {
    return <Layout>
      <h3 className="aaa">{this.state.title}</h3>
      <div>
        <Link to={`/demo/${this.props.mode}/details/12345`}>点我去详情页</Link>
      </div>
    </Layout>;
  }
}
