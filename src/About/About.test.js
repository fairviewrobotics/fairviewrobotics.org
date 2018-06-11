import React from "react";
import { shallow } from "enzyme";
import About from "./About";
import Page from "../Page/Page";

const setup = (props = {}) => {
  const defaultProps = {};
  const finalProps = {...defaultProps, ...props};

  const wrapper = shallow(<About {...finalProps} />);

  return { wrapper };
};

describe('About', () => {
  it('renders without crashing', () => {
    setup();
  });

  it('renders an about page', () => {
    const { wrapper } = setup();

    expect(wrapper.find(Page)).toExist();
  });
});