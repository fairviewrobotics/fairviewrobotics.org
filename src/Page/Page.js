import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import BackgroundImage from "../BackgroundImage/BackgroundImage";

import styles from './Page.module.css';

export default class Page extends PureComponent {

  static propTypes = {
    backgroundSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  };

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
