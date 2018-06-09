import React from "react";
import { shallow } from "enzyme";
import Page from "./Page";

describe('Page', () => {
  let wrapper;

  it('renders without crashing', () => {
    shallow(<Page backgroundSrc="backgroundimage.jpg" title="Cool Page!" />);
  });

  describe('given a page body, title, and background image', () => {
    beforeEach(() => {
      wrapper = shallow(
        <Page backgroundSrc="backgroundimage.jpg" title="Cool Page!">
          <div>
            <h1>Sub title of the page</h1>
            <p>With loads of useful robotics information</p>
          </div>
        </Page>
      );
    });

    it('should render the page', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});