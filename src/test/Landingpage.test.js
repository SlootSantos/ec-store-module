import React from 'react';
import ReactDOM from 'react-dom';
import { StaticRouter } from 'react-router';
import renderer from 'react-test-renderer';


import { LandingPage } from '../container/landing_page';
import FullPageOne from '../components/fullpage_one';
import FullPageTwo from '../components/fullpage_two';
import FullPageThree from '../components/fullpage_three';

test('render landingpage', () => {
  it('renders first fullpage', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      (
        <StaticRouter context={{}}>
          <FullPageOne />
        </StaticRouter>
        ), div
      );
  });

  it('renders second fullpage', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      (
        <StaticRouter context={{}}>
          <FullPageTwo />
        </StaticRouter>
        ), div
      );
  });

  it('renders third fullpage', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      (
        <StaticRouter context={{}}>
          <FullPageThree />
        </StaticRouter>
        ), div
      );
  });

  it('renders entire landingpage', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      (
        <StaticRouter context={{}}>
          <LandingPage />
        </StaticRouter>
        ), div
      );
  });
});


test('SNAPSHOT renders LandingPage correctily', () => {
  const imprSnap = renderer
    .create((
      <StaticRouter context={{}}>
        <LandingPage />
      </StaticRouter>))
    .toJSON();
  expect(imprSnap).toMatchSnapshot();
});
