import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';

import GalleryThumbnails from "./GalleryThumbnails";
import noScroll from "no-scroll";
import Slideshow from "./Slideshow";

import styles from './GalleryContainer.module.css';
import { Link } from "react-router-dom";

export default class GalleryContainer extends PureComponent {

  static propTypes = {
    galleryNames: PropTypes.arrayOf(PropTypes.string).isRequired,
    currentGallery: PropTypes.shape({
      name: PropTypes.string.isRequired,
      images: PropTypes.arrayOf(PropTypes.shape({
        src: PropTypes.string.isRequired,
        thumbnail: PropTypes.string.isRequired
      })).isRequired
    }).isRequired,
    baseGalleryUrl: PropTypes.string.isRequired,
    createGalleryUrl: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    currentImage: PropTypes.number
  };

  getGalleryUrl = (gallery = this.props.currentGallery.name) =>
    `${this.props.baseGalleryUrl}/${this.props.createGalleryUrl(gallery)}`;

  getThumbnailUrl = index =>
    `${this.getGalleryUrl()}/${index}`;

  handleGalleryClick = gallery =>
    this.props.history.push(this.getGalleryUrl(gallery));

  handleThumbnailClick = index =>
    this.props.history.push(this.getThumbnailUrl(index));

  handleImageExit = () =>
    this.props.history.push(this.getGalleryUrl());

  getNextImage = (nextImage, currentPos = this.props.currentImage) => {
    const { images } = this.props.currentGallery;

    const nextPos = nextImage + currentPos;

    if (nextPos >= images.length) {
      return this.getNextImage(nextPos - images.length, 0);
    } else if (nextPos < 0) {
      return this.getNextImage(nextPos + images.length, 0);
    } else {
      return nextPos;
    }
  };
  
  handleNextImage = () =>
    this.handleThumbnailClick(this.getNextImage(1));

  handlePreviousImage = () =>
    this.handleThumbnailClick(this.getNextImage(-1));

  render() {
    const { galleryNames, currentGallery, currentImage } = this.props;

    const thumbnails = currentGallery.images.map(image => image.thumbnail);

    const galleries = galleryNames.map(galleryName => {
      const ifCurrentGalleryStyle = galleryName === currentGallery.name ? styles.selected : '';
      return (
        <Link
          to={`${this.getGalleryUrl(galleryName)}`}
          key={galleryName}
          className={`${ifCurrentGalleryStyle} ${styles.galleryButton}`}>
          {galleryName}
        </Link>
      );
    });

    let slideshow = null;

    if (currentImage !== null) {
      const { src } = currentGallery.images[currentImage];
      slideshow = (
        <Slideshow
          src={src}
          alt={currentGallery.name}
          onPreviousImage={this.handlePreviousImage}
          onNextImage={this.handleNextImage}
          onExit={this.handleImageExit}
        />
      );
      noScroll.on();
    } else {
      noScroll.off();
    }

    return (
      <Fragment>
        {slideshow}
        <div className={styles.galleryContainer}>
          <div className={styles.header}>
            {galleries}
          </div>
          <div className={styles.galleryContent}>
            <GalleryThumbnails
              galleryName={currentGallery.name}
              baseLinkUrl={`${this.getGalleryUrl()}`}
              thumbnails={thumbnails}
            />
          </div>
        </div>
      </Fragment>
    );
  }
}