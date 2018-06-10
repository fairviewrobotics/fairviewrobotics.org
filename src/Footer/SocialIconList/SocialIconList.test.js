import React from "react";
import { shallow } from "enzyme";
import SocialIconList from "./SocialIconList";

describe('SocialIconList', () => {
  let wrapper;

  it('render without crashing', () => {
    const socialMedia = [];
    shallow(
      <SocialIconList socialMedia={socialMedia}/>
    );
  });

  describe('given a list of `socialMedia`', () => {
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
        <SocialIconList socialMedia={socialMedia}/>
      );
    });

    it('should render a list of social media icons', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});