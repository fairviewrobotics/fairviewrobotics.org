import React from "react";
import About from "./About";
import Page from "../Page/Page";
import setupComponent from "../TestHelper/setupComponent";

const { shallow: setup } = setupComponent(About,
  [
    {
      name: 'page',
      query: Page
    }
  ]
);

describe('About', () => {
  it('renders without crashing', () => {
    setup();
  });

  it('renders an about page', () => {
    const { page } = setup();

    expect(page).toExist();
  });
});