import React, { PureComponent } from 'react';
import SocialIcon from "./SocialIcon";

import styles from './SocialIconList.module.css';

export type SocialIconListProps = {
  socialMedia: { url: string, icon: any }[];
}

export default class SocialIconList extends PureComponent<SocialIconListProps> {
  render() {
    return (
      <div className={styles.socialMediaList}>
        {this.props.socialMedia.map(icon =>
          <SocialIcon key={icon.url} icon={icon.icon} url={icon.url} />
        )}
      </div>
    );
  }
}
