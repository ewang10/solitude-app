import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import DateCategory from './DateCategory';

describe('DateCategory Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDom.render(
      <BrowserRouter>
        <DateCategory />
      </BrowserRouter>
      , div);
      ReactDom.unmountComponentAtNode(div);
  });
});