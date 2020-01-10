import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Filter from './Filter';

describe('Filter Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDom.render(
      <BrowserRouter>
        <Filter />
      </BrowserRouter>
      , div);
      ReactDom.unmountComponentAtNode(div);
  });
});