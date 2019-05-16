import { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter, RouteComponentProps } from "react-router-dom";
import { Location } from 'history';

export type RouteChangeProps = RouteComponentProps & {
  onRouteChange: (location: Location<any>) => any;
}

export default withRouter(class RouteChange extends Component<RouteChangeProps> {

  static propTypes = {
    onRouteChange: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.routeChanged()
  }

  componentDidUpdate(prevProps: RouteChangeProps) {
   if (this.props.location.pathname !== prevProps.location.pathname) {
      this.routeChanged();
    }
  }

  routeChanged() {
    const { location } = this.props;

    this.props.onRouteChange(location);
  }

  render() {
    return null;
  }
});