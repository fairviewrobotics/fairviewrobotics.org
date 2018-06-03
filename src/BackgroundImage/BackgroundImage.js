import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import styles from './BackgroundImage.module.css';

export default class BackgroundImage extends PureComponent {

  static propTypes = {
    src: PropTypes.string.isRequired,
    fullScreen: PropTypes.bool,
    animate: PropTypes.shape({
      duration: PropTypes.number.isRequired,
      delay: PropTypes.number.isRequired
    })
  };

  static defaultProps = {
    fullScreen: false
  };

  render() {
    const imageStyle = {
      backgroundImage: `url(${this.props.src})`
    };

    if (!this.props.fullScreen) {
      imageStyle.position = 'absolute';
      imageStyle.backgroundPosition = '50% 75px';
    }
    const fullScreenClass = !this.props.fullScreen ? styles.notFullscreen : '';
    
    const animationStyle = this.props.animate ?
      {
        transition: `background-image ${this.props.animate.duration}ms, background-size 0s`,
        transitionDelay: `${this.props.animate.delay}ms`
      }
      :
      null;

    return (
      <div>
        <div className={`${styles.introMask} ${fullScreenClass}`} />
        <div className={`${styles.imageParallax} ${fullScreenClass}`} style={{ ...imageStyle, ...animationStyle }} />
      </div>
    );
  }
}
