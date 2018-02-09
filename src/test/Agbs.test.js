import React from 'react';
import ReactDOM from 'react-dom';
import { StaticRouter } from 'react-router';
import renderer from 'react-test-renderer';


import AGB from '../container/agb';
import Impressum from '../container/impressum';

test('renders AGB/impressum page', () => {
    it('renders AGB paeg', () => {
      const div = document.createElement('div');
      ReactDOM.render(
        (
          <StaticRouter context={{}}>
            <AGB />
          </StaticRouter>
          ), div
        );
    });

    it('renders entire cart page', () => {
      const div = document.createElement('div');
      ReactDOM.render(
        (
          <StaticRouter context={{}}>
            <Impressum />
          </StaticRouter>
          ), div
        );
    });
});

test('SNAPSHOT renders AGB correctily', () => {
  const agbSnap = renderer
    .create((
      <StaticRouter context={{}}>
        <AGB />
      </StaticRouter>
        ))
    .toJSON();
  expect(agbSnap).toMatchSnapshot();
});

test('SNAPSHOT renders Impressum correctily', () => {
  const imprSnap = renderer
    .create((
      <StaticRouter context={{}}>
        <Impressum />
      </StaticRouter>))
    .toJSON();
  expect(imprSnap).toMatchSnapshot();
});
