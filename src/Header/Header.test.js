import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";
jest.mock('@fortawesome/fontawesome-free-solid', () => ({
  faBars: 'mockedfaBarsIcon'
}));

describe('Header', () => {
  let wrapper;

  it('renders without crashing', () => {
    shallow(
      <Header isCollapsed={false}/>
    );
  });

  it('renders a navbar with links and logo', () => {
    wrapper = shallow(
      <Header isCollapsed={false}/>
    );

    expect(wrapper).toMatchSnapshot();
  });

  describe('when it `isCollapsed`', () => {
    beforeEach(() => {
      wrapper = shallow(
        <Header isCollapsed={true}/>
      );
    });

    it('renders a collapsed navbar', () => {
      expect(wrapper).toHaveClassName('topNavCollapse');
    });
  });
});