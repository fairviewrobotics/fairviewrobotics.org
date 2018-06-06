import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from "@fortawesome/fontawesome-free-solid/shakable.es";

import styles from './Slideshow.module.css';

export default class Slideshow extends Component {

  static propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    onPreviousImage: PropTypes.func.isRequired,
    onNextImage: PropTypes.func.isRequired,
    onExit: PropTypes.func.isRequired
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  state = {
    isLoaded: false
  };

  preLoad = imageElement => {
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

  handleKeyDown = event => {
    if (event.key === 'ArrowLeft') {
      return this.props.onPreviousImage();
    } else if (event.key === 'ArrowRight') {
      return this.props.onNextImage();
    } else if (event.key === 'Escape') {
      return this.props.onExit();
    }
  };

  redirectToImage = () =>
    window.location = this.props.src;

  // This stops the click command on anything but the background from triggering #image-full-outer's onClick event, which exits
  preventExit = event =>
    event.stopPropagation();

  render() {
    return (
      <div className={styles.slideshowFullOuter} onClick={this.props.onExit}>
        <div className={styles.slideshowContainer} onClick={this.preventExit}>
          <a className={styles.imageClose} onClick={this.props.onExit}>close</a>
          <FontAwesomeIcon
            className={`${styles.fullArrow} ${styles.leftArrow}`}
            onClick={this.props.onPreviousImage}
            icon={faAngleLeft}/>
          {
            !this.state.isLoaded &&
            <div className={styles.loadingText}>
              <h1>Loading...</h1>
            </div>
          }
          <img
            className={styles.fullImage}
            onClick={this.redirectToImage}
            src={this.props.src}
            alt={this.props.alt}
            ref={this.preLoad}
          />
          <FontAwesomeIcon
            className={`${styles.fullArrow} ${styles.rightArrow}`}
            onClick={this.props.onNextImage}
            icon={faAngleRight} />
        </div>
      </div>
    );
  }
}
