import React, { Component } from 'react';
import './ErrorBoundary.css';

export default class ErrorBoundary extends Component {

  state = {
    hasError: false
  };

  componentDidCatch() {
    this.setState({ hasError: true })
  }

  render() {

    if (this.state.hasError) {
      return (
        <div className="error-container">
          <div className="error-item">
            <h1>Something went wrong!</h1>
            <p>Try refreshing the browser.</p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
