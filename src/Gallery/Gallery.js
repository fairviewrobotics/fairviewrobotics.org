import React, { Component, Fragment } from 'react';
import PropTypes from "prop-types";
import { Redirect, Route } from "react-router-dom";

import GalleryContainer from "./GalleryContainer";
import NotFound from "../NotFound/NotFound";
import BackgroundImage from "../BackgroundImage/BackgroundImage";

import intro5 from '../images/intro/5.jpg';

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

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  createGalleryUrl = galleryName => galleryName.replace(/ /g, '-');

  parseGalleryUrl = galleryName => galleryName.replace(/-/g, ' ');

  render() {
    const { match, galleries } = this.props;
    const galleryNames = this.props.galleries.map(gallery => gallery.name);
    return (
      <Fragment>
        <Route exact path={match.path} render={() => <Redirect to={`${match.path}/0`}/>} />

        <Route
          path={`${match.path}/:gallery?/:photoIndex?`}
          render={
            props => {
              const { gallery, photoIndex } = props.match.params;
              
              if (!gallery) {
                const path = `${match.path}/` + !photoIndex ?
                  `${this.createGalleryUrl(galleries[0].name)}/`
                  :
                  `${this.createGalleryUrl(gallery)}/${photoIndex}`;
                return <Redirect to={path}/>
              }

              const galleryObject = this.props.galleries.find(galleryItem => galleryItem.name ===  this.parseGalleryUrl(gallery));
              const photoIndexNum = photoIndex ? parseInt(photoIndex, 10) : null;

              if (!galleryObject || (isNaN(photoIndexNum) && photoIndex !== null) ||
                (galleryObject && (photoIndexNum < 0 || photoIndexNum >= galleryObject.images.length))
              ) {
                // TODO: use correct gallery notfound
                return <NotFound/>
              }

              return (
                <Fragment>
                  <BackgroundImage src={intro5}/>
                  <h1 className="page-title">gallery</h1>
                  <GalleryContainer
                    {...props}
                    baseGalleryUrl={match.path}
                    createGalleryUrl={this.createGalleryUrl}
                    galleryNames={galleryNames}
                    currentGallery={galleryObject}
                    currentImage={photoIndexNum}
                  />
                </Fragment>
              );
            }
          }
        />
      </Fragment>
    );
  }
}
