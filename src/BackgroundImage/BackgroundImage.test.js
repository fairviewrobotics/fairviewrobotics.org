import React from "react";
import { shallow } from "enzyme";
import BackgroundImage from "./BackgroundImage";

const setup = (props = {}) => {
  const defaultProps = {
    src: 'http://urltoimage.com/image.jpg'
  };
  const finalProps = {...defaultProps, ...props};

  const wrapper = shallow(<BackgroundImage {...finalProps} />);

  return {
    wrapper,
    imageParallax: wrapper.find('.imageParallax')
  };
};

describe('BackgroundImage', () => {
  it('renders without crashing', () => {
    setup();
  });

  describe('when given a `src`', () => {
    it('renders an element with a background of `src`', () => {
      const src = 'whackyMeme.jpg';

      const { wrapper } = setup({ src });

      expect(wrapper).toMatchSnapshot();
      // expect(wrapper.find('.imageParallax')).toHaveStyle('backgroundImage', `url(${src})`)
    });
  });

  describe('when not `fullScreen`', () => {
    it('renders a image container for the background image', () => {
      const { wrapper } = setup();

      expect(wrapper.find('.imageContainer')).toExist();
    });
  });

  describe('when `animate`', () => {
    let image;

    beforeEach(() => {
      const { imageParallax } = setup({
        animate: {
          duration: 1000,
          delay: 500
        }
      });

      image = imageParallax;
    });

    it('renders the background image with a transition with a `duration`', () => {
      expect(image.prop('style').transition).toMatchSnapshot();
    });

    it('renders the background image with a transition `delay`', () => {
      expect(image.prop('style').transitionDelay).toMatchSnapshot();
    });
  });

});