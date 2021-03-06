import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Item from './Item';

describe('Item Component', () => {
  it('renders without crashing', () => {
    const journal = {
      id: 1,
      categoryid: 1,
      name: 'journal 1',
      duration: 5,
      beforemood: "stressed",
      aftermood: "relieved",
      date: new Date(),
      goal: '',
      content: ''
  };
    const div = document.createElement('div');
    ReactDom.render(
      <BrowserRouter>
        <Item journal={journal}/>
      </BrowserRouter>
      , div);
      ReactDom.unmountComponentAtNode(div);
  });
});
