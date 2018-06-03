import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import SocialIconList from "./SocialIconList/SocialIconList";

import styles from './Footer.module.css'

export default class Footer extends PureComponent {

  static propTypes = {
    socialMedia: PropTypes.arrayOf(PropTypes.shape({
      url: PropTypes.string.isRequired,
      icon: PropTypes.object.isRequired
    })).isRequired,
    fixed: PropTypes.bool.isRequired
  };

  render() {
    const footerType = this.props.fixed ? styles.absolute : styles.inline;

    return (
      <div className={`${styles.socialMedia} ${footerType}`}>
        <SocialIconList socialMedia={this.props.socialMedia}/>
        <a className={styles.email} href="mailto:fairviewrobotics@gmail.com">FAIRVIEWROBOTICS@GMAIL.COM</a>
      </div>
    );
  }
}
