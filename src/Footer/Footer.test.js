import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer";

describe('Footer', () => {
  let wrapper;

  it('renders without crashing', () => {
    shallow(
      <Footer socialMedia={[]} />
    );
  });

  describe('given `socialMedia`', () => {
    beforeEach(() => {
      const socialMedia = [
        {
          icon: {
            name: 'githubIcon'
          },
          url: 'http://github.com'
        },
        {
          icon: {
            name: 'facebookIcon'
          },
          url: 'http://facebook.com'
        },
        {
          icon: {
            name: 'twitterIcon'
          },
          url: 'http://twitter.com'
        }
      ];

      wrapper = shallow(
        <Footer socialMedia={socialMedia}/>
      );
    });

    it('should render a inline social media list and an email', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('when `fixed`', () => {
    beforeEach(() => {
      const socialMedia = [];
      wrapper = shallow(
        <Footer fixed socialMedia={socialMedia}/>
      );
    });

    it('should render an absolute positioned list', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});