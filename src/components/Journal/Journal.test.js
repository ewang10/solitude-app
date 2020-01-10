import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Journal from './Journal';

describe('Journal Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDom.render(
      <BrowserRouter>
        <Journal />
      </BrowserRouter>
      , div);
      ReactDom.unmountComponentAtNode(div);
  });
});