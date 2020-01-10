import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import JournalMain from './JournalMain';

describe('JournalMain Component', () => {
  it('renders without crashing', () => {
    const journal = {
      id: 1,
      categoryid: 1,
      name: 'journal 1',
      duration: 5,
      beforemood: "stressed",
      aftermood: "relieved",
      date: new Date(),
      goal: 'stress relieve',
      content: ''
  };
    const div = document.createElement('div');
    ReactDom.render(
      <BrowserRouter>
        <JournalMain journal={journal}/>
      </BrowserRouter>
      , div);
      ReactDom.unmountComponentAtNode(div);
  });
});
