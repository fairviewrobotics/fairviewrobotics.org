import React, { Component } from "react";

import Page from "../Page/Page";

import styles from './JoinUs.module.css';
import backgroundImage from '../images/intro/12.jpg';
import classNames from "classnames";

interface JoinUsState {
  successShow: Boolean;

  name: String;
  email: String;
  comments: String;
}

export default class JoinUs extends Component<{}, JoinUsState> {

  formRef: HTMLFormElement | null = null;

  state = {
    successShow: false,
    name: "",
    email: "",
    comments: "",
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
          <form 
            target="iframe-form" 
            action="https://docs.google.com/forms/d/e/1FAIpQLScq2QamP4j6q1vYnJB2Ayy6Z-tezB_fzecrZfTwqwN-4bTzaQ/formResponse" 
            method="POST"
            onSubmit={(e) => {
              /* show success */
              this.setState(() => { return {successShow: true}});
              window.setTimeout(() => {
                this.setState(() => {return {successShow: false}});
                /* we need to do this after the request is sent */
                this.setState(() => {return {name: "", email: "", comments: ""}});
              }, 2000);
            }} 
            ref={(el) => {this.formRef = el;}}
          >
            <label>Name*:</label>
            <input 
              value={this.state.name} 
              type="text" 
              name="entry.622190766" 
              onChange={(e) => this.setState({name: e.target.value})} 
              required>
            </input>
            <label>Email*:</label>
            <input 
              value={this.state.email} 
              type="email" 
              name="entry.863521392" 
              onChange={(e) => this.setState({email: e.target.value})} 
              required>  
            </input>
            <label>Anything else you'd like us to know?</label>
            <textarea 
              value={this.state.comments} 
              name="entry.1549089651"
              onChange={(e) => this.setState({comments: e.target.value})} 
              >
            </textarea>
            <input type="submit" value="Submit"></input>
          </form>
          <iframe className={styles.iframeForm} name="iframe-form" title="iframe-form"></iframe>
          </p>
        </div>
      </Page>
    );
  }
}