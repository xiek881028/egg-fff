import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Links extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { to, children } = this.props;
    if (EASY_ENV_IS_NODE) {
      // window.__INITIAL_STATE__.mode == 'web'
      return <a href={to}>{children}</a>
    }else {
      const isSpa = window.__INITIAL_STATE__.mode == 'spa';
      return isSpa ? <Link to={to}>{children}</Link> : <a href={to}>{children}</a>;
    }
  }
}

export default Links;
