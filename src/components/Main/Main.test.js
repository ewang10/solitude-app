import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Main from './Main';

describe('Main Component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDom.render(
        <BrowserRouter>
            <Main />
        </BrowserRouter>
        , div);
        ReactDom.unmountComponentAtNode(div);
    })
});