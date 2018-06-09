import React from "react";
import * as ReactDOM from "react-dom";
import { shallow } from "enzyme";

import SponsorList from "./SponsorList";

describe('SponsorList', () => {
  let wrapper;

  it("renders without crashing", () => {
    const sponsors = [];

    const div = document.createElement("div");
    ReactDOM.render(
      <SponsorList sponsors={sponsors}/>,
      div
    );
  });

  describe('when given no `sponsors`', () => {
    beforeEach(() => {
      const sponsors = [];

      wrapper = shallow(
        <SponsorList sponsors={sponsors} />
      );
    });

    it('should render an empty list', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('when given some `sponsors`', () => {
    beforeEach(() => {
      const sponsors = [
        {
          name: 'Cheez it',
          size: 90,
          url: 'http://www.urltocheese.com/',
          src: 'http://www.cheeseimage.com/'
        },
        {
          name: 'Mcdonalds',
          size: 30,
          url: 'http://www.urltomd.com/',
          src: 'http://www.mdimage.com/'
        },
        {
          name: 'Chef Boyardee',
          size: 50,
          url: 'http://www.urltoboyardee.com/',
          src: 'http://www.boyardeeimage.com/'
        }
      ];

      wrapper = shallow(
        <SponsorList sponsors={sponsors} />
      );
    });

    it('should render each sponsor', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

});