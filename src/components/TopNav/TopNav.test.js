import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import TopNav from './TopNav';

describe('TopNav Component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDom.render(
            <BrowserRouter>
                <TopNav />
            </BrowserRouter>
            , div);
        ReactDom.unmountComponentAtNode(div);
    })
});