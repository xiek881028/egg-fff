import React from 'react';
import Result from '@src/components/Result/crash';
import './index.scss';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      errorInfo: {}
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    /* eslint no-console: "off" */
    this.setState({
      errorInfo: {
        error,
        url: location.href,
        ...info,
        localStorage
      }
    });
  }

  sendError() {
    // console.log(`~~发送错误日志~~`, this.state.errorInfo);
  }

  render() {
    if (this.state.hasError || this.props.hasError) {
      return (
        <div styleName="error-wrap">
          <div styleName="box">
            <Result />
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
