import React, { PureComponent } from 'react';

import styles from './Sponsor.module.css';

export type SponsorProps = {
  name: string;
  size: number;
  url: string;
  src: string;
}

export default class Sponsor extends PureComponent<SponsorProps> {
  render() {
    const trueWidth = this.props.size * .9;

    return (
      <a className={styles.sponsor} target='_blank' href={this.props.url} rel="noopener noreferrer">
        <img src={this.props.src} alt={this.props.name} className={styles.image} style={{ width: `${trueWidth}vw` }} />
      </a>
    );
  }
}
