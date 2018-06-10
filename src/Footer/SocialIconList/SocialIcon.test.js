import React from "react";
import { shallow } from "enzyme";
import SocialIcon from "./SocialIcon";

describe('SocialIcon', () => {
  let wrapper;

  it('renders without crashing', () => {
    shallow(<SocialIcon icon={{ name: 'icon' }} url="" />)
  });

  describe('given an `icon` and `url`', () => {
    beforeEach(() => {
      wrapper = shallow(
        <SocialIcon icon={{ name: 'I Am A Font Awesome Icon' }} url="https://socialmediasite.com/" />
      );
    });

    it('should render an linked icon', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});