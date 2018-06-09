import React from "react";
import { shallow } from 'enzyme';
import Sponsors from "./Sponsors";

describe('Sponsors', () => {
  let wrapper;

  it('renders without crashing', () => {
    const sponsors = [];

    shallow(<Sponsors sponsors={sponsors}/>);
  });

  it('should scroll up on load', () => {
    jest.spyOn(global.window, 'scrollTo');

    shallow(<Sponsors sponsors={[]}/>);

    expect(global.window.scrollTo).toHaveBeenCalledWith(0, 0);
  });

  describe('given `sponsors`', () => {
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
        <Sponsors sponsors={sponsors}/>
      );
    });

    it('should render a page with a list of sponsors', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});