import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import styles from './SocialIcon.module.css';

export default class SocialIcon extends PureComponent {

  static propTypes = {
    icon: PropTypes.any.isRequired,
    url: PropTypes.string.isRequired
  };

  render() {
    return (
      <a className={styles.socialIcon}
         target="_blank"
         href={this.props.url}>
        <FontAwesomeIcon icon={this.props.icon} />
      </a>
    );
  }
}
