import React from "react";
import { mount, shallow } from "enzyme";

const setupComponent = (Component, defaultProps = {}) => {
  const assembleProps = props => ({...defaultProps, ...props});

  const constructComponent = (props, construct) => ({
    wrapper: construct(<Component {...assembleProps(props)}/>)
  });

  return {
    mount: (props = {}) => constructComponent(props, mount),
    shallow: (props = {}) => constructComponent(props, shallow)
  }
};

export default setupComponent;