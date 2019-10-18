import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

import styles from './Slideshow.module.css';

export type SlideshowProps = {
  src: string;
  alt: string;
  onPreviousImage: () => any;
  onNextImage: () => any;
  onExit: () => any;
}

export default class Slideshow extends Component<SlideshowProps> {

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  state = {
    isLoaded: false
  };

  preLoad = (imageElement: HTMLImageElement) => {
    if (!imageElement) {
      return;
    }

    const updateFunc = () => {
      this.setState({ isLoaded: true });
    };

    imageElement.onload = updateFunc;

    if (imageElement.complete) {
      updateFunc();
    }
  };

  handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      return this.props.onPreviousImage();
    } else if (event.key === 'ArrowRight') {
      return this.props.onNextImage();
    } else if (event.key === 'Escape') {
      return this.props.onExit();
    }
  };

  handlePreviousImage = (event: React.MouseEvent<HTMLElement>) => {
    this.preventExit(event);
    this.props.onPreviousImage();
  };

  handleNextImage = (event: React.MouseEvent<HTMLElement>) => {
    this.preventExit(event);
    this.props.onNextImage();
  };

  redirectToImage = (event: React.MouseEvent<HTMLElement>) => {
    this.preventExit(event);
    window.location.href = this.props.src;
  };

  // This stops the click command on anything but the background from triggering #image-full-outer's onClick event, which exits
  preventExit = (event: React.MouseEvent<HTMLElement>) =>
    event.stopPropagation();

  render() {
    return (
      <div className={styles.slideshowFullOuter} onClick={this.props.onExit}>
        <button className={styles.imageClose} onClick={this.props.onExit}>close</button>
        <div onClick={this.handlePreviousImage}>
          <FontAwesomeIcon
            className={`${styles.fullArrow} ${styles.leftArrow}`}
            icon={faAngleLeft}/>
        </div>
        {
          !this.state.isLoaded &&
          <div className={styles.loadingText}>
            <h1>Loading...</h1>
          </div>
        }
        <img
          className={`${styles.fullImage}`}
          onClick={this.redirectToImage}
          src={this.props.src}
          alt={this.props.alt}
          ref={this.preLoad}
        />
        <div onClick={this.handleNextImage}>
          <FontAwesomeIcon
            className={`${styles.fullArrow} ${styles.rightArrow}`}
            icon={faAngleRight} />
        </div>
      </div>
    );
  }
}
