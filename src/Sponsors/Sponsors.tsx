import React, { PureComponent } from 'react';
import SponsorList from "./SponsorList/SponsorList";

import intro11 from '../images/intro/11.jpg';
import Page from "../Page/Page";

export type SponsorsProps = {
  sponsors: {
    name: string;
    size: number;
    url: string;
    src: string;
  }[];
}

export default class Sponsors extends PureComponent<SponsorsProps> {

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
