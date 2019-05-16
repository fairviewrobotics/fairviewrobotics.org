import React, { Component, Fragment } from 'react';
import { Redirect, Route, RouteComponentProps } from "react-router-dom";

import GalleryContainer from "./GalleryContainer";
import NotFound from "../NotFound/NotFound";

import intro5 from '../images/intro/5.jpg';
import Page from "../Page/Page";

export type GalleryProps = RouteComponentProps & {
  galleries: {
    name: string;
    images: { src: string, thumbnail: string }[];
  }[];
}

export default class Gallery extends Component<GalleryProps> {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  createGalleryUrl = (galleryName: string) => galleryName.replace(/ /g, '-');

  parseGalleryUrl = (galleryName: string) => galleryName.replace(/-/g, ' ');

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
              // TODO: refactor into a component
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

              if (!galleryObject ||
                (galleryObject && typeof photoIndexNum === 'number' && (photoIndexNum < 0 || photoIndexNum >= galleryObject.images.length))
              ) {
                // TODO: use correct gallery notfound
                return <NotFound/>
              }

              return (
                <Page
                  backgroundSrc={intro5}
                  title="Gallery">
                    <GalleryContainer
                      {...props}
                      baseGalleryUrl={match.path}
                      createGalleryUrl={this.createGalleryUrl}
                      galleryNames={galleryNames}
                      currentGallery={galleryObject}
                      currentImage={photoIndexNum}
                    />
                </Page>
              );
            }
          }
        />
      </Fragment>
    );
  }
}
