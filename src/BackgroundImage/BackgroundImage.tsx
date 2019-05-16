import React, { Fragment } from 'react';
import styles from './BackgroundImage.module.css';

const BackgroundImage = ({ src, fullScreen, animate }: { src: string, fullScreen: boolean, animate?: { duration: number, delay: number } }) => {
  const imageStyle = {
    backgroundImage: `url(${src})`
  };

  const animationStyle = animate ?
    {
      transition: `background-image ${animate.duration}ms, background-size 0s`,
      transitionDelay: `${animate.delay}ms`
    }
    :
    null;

  const parallaxStyle = {...animationStyle, ...imageStyle};

  let backgroundImage = (
    <Fragment>
      <div className={styles.introMask} />
      <div className={styles.imageParallax} style={parallaxStyle} />
    </Fragment>
  );

  if (!fullScreen) {
    backgroundImage = (
      <div className={styles.imageContainer}>
        {backgroundImage}
      </div>
    );
  }

  return backgroundImage;
};

BackgroundImage.defaultProps = {
  fullScreen: false
};

export default BackgroundImage;