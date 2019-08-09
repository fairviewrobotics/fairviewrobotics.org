import React, { Component } from "react";

import Page from "../Page/Page";

import styles from './JoinUs.module.css';
import backgroundImage from '../images/intro/12.jpg';
import classNames from "classnames";

interface JoinUsState {
  successShow: Boolean;
}

export default class JoinUs extends Component<{}, JoinUsState> {

  state = {
    successShow: false
  };

  componentDidMount () {
    window.scrollTo(0, 0);
  }

  render () {
    return (
      <Page
        backgroundSrc={backgroundImage}
        title="Join Us"
      >
        <div className={styles.joinContainer}>
          <p>The Black Knights are always happy to welcome new members. Fill out the form below, and we'll notify you when and where our first meeting will be.
            <div className={classNames(styles.success, this.state.successShow ? styles.successShow : undefined)}>Your response has been recorded</div>
          <form target="iframe-form" action="https://docs.google.com/forms/d/e/1FAIpQLScq2QamP4j6q1vYnJB2Ayy6Z-tezB_fzecrZfTwqwN-4bTzaQ/formResponse" method="POST"     onSubmit={(e) => {
            this.setState(() => { return {successShow: true}});
            window.setTimeout(() => {
              this.setState(() => {return {successShow: false}});
            }, 3000);
          }}>
            <label>Name*:</label>
            <input type="text" name="entry.622190766" required></input>
            <label>Email*:</label>
            <input type="email" name="entry.863521392" required></input>
            <label>Anything else you'd like us to know?</label>
            <textarea name="entry.1549089651"></textarea>
            <input type="submit" value="Submit"></input>
          </form>
          <iframe className={styles.iframeForm} name="iframe-form"></iframe>
          </p>
        </div>
      </Page>
    );
  }
}