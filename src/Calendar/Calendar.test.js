import React from "react";
import { shallow } from "enzyme";
import Calendar from "./Calendar";

describe('Calendar', () => {
  it('renders without crashing', () => {
    shallow(
      <Calendar/>
    );
  });

  it('renders a Calendar page', () => {
    const wrapper = shallow(
      <Calendar/>
    );
    expect(wrapper).toMatchSnapshot();
  });
});