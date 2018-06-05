import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from "react-bootstrap";
import noScroll from 'no-scroll';
import BackgroundImage from "../BackgroundImage/BackgroundImage";

import styles from './Gallery.module.css';

import Slideshow from "./Slideshow";

import intro5 from '../images/intro/5.jpg';

// TODO add routes
// TODO refactor

export default class Gallery extends Component {

  static propTypes = {
    galleries: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      images: PropTypes.arrayOf(PropTypes.shape({
        src: PropTypes.string.isRequired,
        thumbnail: PropTypes.string.isRequired
      })).isRequired
    })).isRequired
  };

  state = {
    currentGallery: this.props.galleries[0].name,
    currentImage: null
  };

  getCurrentGallery = () =>
    this.props.galleries.find(gallery => gallery.name === this.state.currentGallery);

  getImages = () =>
    this.getCurrentGallery().images;


  changeGallery = name =>
    this.setState({ currentGallery: name });

  fullscreenImageAt = index =>
    this.setState({ currentImage: index });

  exitSlideshow = () =>
    this.setState({ currentImage: null });

  getNextImage = nextImage => {
    // TODO: refactor
    if (nextImage >= 1) {
      if (this.state.currentImage + nextImage >= this.getImages().length) {
        return this.state.currentImage + nextImage - this.getImages().length;
      }

      return this.state.currentImage + nextImage;
    } else if (nextImage <= -1) {
      if (this.state.currentImage + nextImage < 0) {
        return this.getImages().length + nextImage;
      }

      return this.state.currentImage + nextImage;
    } else {
      return nextImage;
    }
  };

  handlePreviousImage = () =>
    this.setState({ currentImage: this.getNextImage(-1) });

  handleNextImage = () =>
    this.setState({ currentImage: this.getNextImage(1) });

  render() {
    let slideShow = null;

    if (this.state.currentImage !== null) {
      const { src } = this.getCurrentGallery().images[this.state.currentImage];
      slideShow = (
        <Slideshow
          src={src}
          alt={this.state.currentGallery}
          onPreviousImage={this.handlePreviousImage}
          onNextImage={this.handleNextImage}
          onExit={this.exitSlideshow}
        />
      );
      noScroll.on();
    } else {
      noScroll.off();
    }

    const galleries = this.props.galleries.map(gallery => {

      const ifCurrentGalleryStyle = gallery.name === this.state.currentGallery ? styles.selected : '';

      return (
        <Button
          key={gallery.name}
          className={`${ifCurrentGalleryStyle} ${styles.galleryButton}`}
          onClick={() => this.changeGallery(gallery.name)}>
          {gallery.name}
        </Button>
      )
    });

    const currentGalleryPhotos = this.getImages().map((image, index) => (
      <div key={image.thumbnail} className={styles.imageThumbnail}>
        <img
          height="87.5px"
          width="auto"
          src={image.thumbnail}
          onClick={() => this.fullscreenImageAt(index)}
          alt={`${this.state.currentGallery} thumbnail`}
        />
      </div>
    ));

    return (
      <div>
        <BackgroundImage src={intro5}/>
        {slideShow}
        <h1 className="page-title">gallery</h1>

        <div className={styles.galleryContainer}>
          <div className={styles.header}>
            {galleries}
          </div>
          <div className={styles.galleryContent}>
            {currentGalleryPhotos}
          </div>
        </div>
      </div>
    );
  }
}
