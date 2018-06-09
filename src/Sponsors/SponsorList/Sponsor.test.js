import React from "react";
import { shallow } from "enzyme";
import Sponsor from "./Sponsor";

describe('Sponsor', () => {
  let wrapper;

  it('renders without crashing', () => {
    shallow(<Sponsor src="" size={0} name="" url=""/>);
  });

  describe('given a sponsor', () => {
    beforeEach(() => {
      wrapper = shallow(
        <Sponsor name="Jason" size={50} url="urltosponsor.com" src="imageurlforsponsor"/>
      );
    });

    it('should render a clickable image', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should have a size 90% of the view width', () => {
      // 50 * 90% = 45
      expect(wrapper.find('img')).toHaveStyle('width', '45vw');
    });
  });
});