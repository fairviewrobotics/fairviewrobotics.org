import React, { PureComponent } from 'react';
import SocialIconList from "./SocialIconList/SocialIconList";

import styles from './Footer.module.css';

export type FooterProps = {
  socialMedia: { url: string, icon: any }[];
  fixed: boolean;
}

export default class Footer extends PureComponent<FooterProps> {

  static defaultProps = {
    fixed: false
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
