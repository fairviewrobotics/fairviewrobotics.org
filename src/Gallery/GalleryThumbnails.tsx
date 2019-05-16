import React, { Fragment } from "react";

import styles from './GalleryThumbnails.module.css';
import { Link } from "react-router-dom";

const GalleryThumbnails = ({ galleryName, baseLinkUrl, thumbnails }: { galleryName: string, baseLinkUrl: string, thumbnails: string[] }) =>
  <Fragment>
    {thumbnails.map((thumbnail, index) => (
      <div key={thumbnail} className={styles.imageThumbnailContainer}>
        <Link to={`${baseLinkUrl}/${index}`}>
          <img
            className={styles.thumbnail}
            src={thumbnail}
            alt={`${galleryName} thumbnail`}
          />
        </Link>
      </div>
    ))}
  </Fragment>

export default GalleryThumbnails;