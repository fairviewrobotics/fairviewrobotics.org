import React, { PureComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './SocialIcon.module.css';

export type SocialIconProps = {
  icon: any;
  url: string;
}

export default class SocialIcon extends PureComponent<SocialIconProps> {
  render() {
    return (
      <a 
        className={styles.socialIcon}
        target="_blank"
        rel="noopener noreferrer"
        href={this.props.url}>
        <FontAwesomeIcon icon={this.props.icon} />
      </a>
    );
  }
}
