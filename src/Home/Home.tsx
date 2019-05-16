import React, { Component } from 'react';
import shuffle from 'array-shuffle';

import styles from './Home.module.css';

import BackgroundImage from "../BackgroundImage/BackgroundImage";

export type HomeProps = {
  weAreItems: { name: string, src: string }[];
  shuffle: boolean;
  timeActive: number;
  timeToFade: number;
}

export default class Home extends Component<HomeProps> {

  static defaultProps = {
    shuffle: false,
    timeActive: 2000,
    timeToFade: 2000
  };

  state = {
    items: this.props.shuffle ? shuffle(this.props.weAreItems) : this.props.weAreItems,
    textPos: 0,
    imagePos: 0,
    fadingOut: false,
    fadingIn: false
  };

  private loopInterval: NodeJS.Timeout | null = null;
  private fadeOutTimeout: NodeJS.Timeout | null = null;
  private fadeInTimeout: NodeJS.Timeout | null = null;

  componentDidMount() {
    this.loopWeAre();
    // todo: implement document.documentElement.setProperty('--transition-time', this.state.textPos / 2);
  }

  componentWillUnmount() {
    // Removes all timers (this prevents memory leaks)
    if (!!this.loopInterval) {
      clearInterval(this.loopInterval);
    }
    if (!!this.fadeOutTimeout) {
      clearTimeout(this.fadeOutTimeout);
    }
    if (!!this.fadeInTimeout) {
      clearTimeout(this.fadeInTimeout);
    }
  }

  loopWeAre = () => {
    this.loopInterval = setInterval(() => {
      this.updateWeAre();

    }, this.props.timeActive + this.props.timeToFade);
  };

  getNextArrayPos(pos: number) {
    let nextPos = pos + 1;

    if (nextPos >= this.state.items.length) {
      nextPos = 0;
    }
    return nextPos;
  }

  updateWeAre = () => {
    this.setState({ fadingOut: true, imagePos: this.getNextArrayPos(this.state.imagePos) }); // fade out

    this.fadeOutTimeout = setTimeout(() => {
      this.setState({
        textPos: this.getNextArrayPos(this.state.textPos),
        fadingOut: false,
        fadingIn: true
      }); // start fade in

      this.fadeInTimeout = setTimeout(() => {
        this.setState({ fadingOut: false, fadingIn: false }); // end fade in
      }, this.props.timeToFade / 2);

    }, this.props.timeToFade / 2);
  };

  render() {

    const fadeClass = this.state.fadingOut ? styles.fadingOut : '';

    const {name: weAre} = this.state.items[this.state.textPos];
    const {src} = this.state.items[this.state.imagePos];

    return (
      <div>
        <BackgroundImage fullScreen src={src} animate={{
          duration: this.props.timeToFade / 2,
          delay: this.props.timeToFade / 2
        }} />
        <h1 className={`${styles.weAre} ${fadeClass}`}>we are <span className={styles.weAreInner}>{weAre}</span></h1>
      </div>
    );
  }
}
