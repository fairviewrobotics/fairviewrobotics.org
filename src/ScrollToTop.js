import { Component } from 'react';
import { withRouter } from 'react-router-dom';

export default withRouter(class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    return null;
  }
});