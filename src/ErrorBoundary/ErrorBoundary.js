import React, { Component } from 'react';
import styles from './ErrorBoundary.module.css';

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
        <div className={styles.container}>
          <div className={styles.errorMessage}>
            <h1>Something went wrong!</h1>
            <p>Try refreshing the browser.</p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
