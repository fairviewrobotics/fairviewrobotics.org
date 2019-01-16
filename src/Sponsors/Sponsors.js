import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import SponsorList from "./SponsorList/SponsorList";

import intro11 from '../images/intro/11.jpg';
import Page from "../Page/Page";

export default class Sponsors extends PureComponent {

  static propTypes = {
    sponsors: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      size: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired
    })).isRequired
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Page
        backgroundSrc={intro11}
        title="Supporters"
      >
        <SponsorList sponsors={this.props.sponsors}/>
      </Page>
    );
  }
}
