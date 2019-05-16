import React, { PureComponent } from 'react';
import BackgroundImage from "../BackgroundImage/BackgroundImage";
import styles from './Page.module.css';

export type PageProps = {
  backgroundSrc: string;
  title: string;
}

export default class Page extends PureComponent<PageProps> {
  render() {
    const {backgroundSrc, title, children} = this.props;
    return (
      <div>
        <BackgroundImage src={backgroundSrc}/>
        <h1 className={styles.title}>{title.toUpperCase()}</h1>
        {children}
      </div>
    );
  }
}
