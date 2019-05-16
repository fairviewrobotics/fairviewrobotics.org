import React, { PureComponent } from 'react';
import Sponsor from "./Sponsor";

import styles from './SponsorList.module.css';

export type SponsorListProps = {
  sponsors: {
    name: string;
    size: number;
    url: string;
    src: string;
  }[];
}

export default class SponsorList extends PureComponent<SponsorListProps> {
  render() {
    return (
      <div className={styles.sponsorList}>
        {this.props.sponsors.map(sponsor =>
          <Sponsor key={sponsor.name} name={sponsor.name} size={sponsor.size} url={sponsor.url} src={sponsor.src} />
        )}
      </div>
    );
  }
}
