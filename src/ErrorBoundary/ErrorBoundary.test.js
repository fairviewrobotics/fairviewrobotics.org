import React, { Component } from "react";
import { mount, shallow } from "enzyme";
import ErrorBoundary from "./ErrorBoundary";

const setup = props => {
  const defaultProps = {};
  const finalProps = {...defaultProps, ...props};

  const wrapper = shallow(
    <ErrorBoundary {...finalProps} />
  );
  return { wrapper: wrapper }
};

describe('ErrorBoundary', () => {
  let wrapper;

  it('renders without crashing', () => {
    setup();
  });

  describe('when a child component crashes', () => {
    beforeEach(() => {

      class ThrowError extends Component {
        render() {
          throw new Error();
        }
      }

      wrapper = mount(
        <ErrorBoundary>
          <ThrowError />
        </ErrorBoundary>
      );
    });

    it('renders a error message to the user', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('when the children work as intended', () => {
    beforeEach(() => {
      wrapper = shallow(
        <ErrorBoundary/>
      )
    });

    it('renders the children', () => {
      const { wrapper } = setup({ children: (
        <div>
          <h1>Page Name</h1>
          <p>Robots are cool!</p>
        </div>
        ) });

      expect(wrapper).toMatchSnapshot();
    });
  });
});