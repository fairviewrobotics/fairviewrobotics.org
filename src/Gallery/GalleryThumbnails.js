import React from "react";
import PropTypes from 'prop-types';

import styles from './GalleryThumbnails.module.css';
import { Link } from "react-router-dom";

const GalleryThumbnails = ({ galleryName, baseLinkUrl, thumbnails }) =>
  thumbnails.map((thumbnail, index) => (
    <div key={thumbnail} className={styles.imageThumbnailContainer}>
      <Link to={`${baseLinkUrl}/${index}`}>
        <img
          className={styles.thumbnail}
          src={thumbnail}
          alt={`${galleryName} thumbnail`}
        />
      </Link>
    </div>
  ));

GalleryThumbnails.propTypes = {
  galleryName: PropTypes.string.isRequired,
  baseLinkUrl: PropTypes.string.isRequired,
  thumbnails: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default GalleryThumbnails;