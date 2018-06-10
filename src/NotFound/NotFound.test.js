import NotFound from "./NotFound";
import { shallow } from "enzyme";
import React from "react";

describe('NotFound', () => {
  it('renders without crashing', () => {
    shallow(
      <NotFound/>
    );
  });

  it('should render a Not Found page', () => {
    const wrapper = shallow(
      <NotFound/>
    );

    expect(wrapper).toMatchSnapshot();
  });
});