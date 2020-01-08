import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import BottomNav from './BottomNav';

describe('BottomNav Component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDom.render(
            <BrowserRouter>
                <BottomNav />
            </BrowserRouter>
            , div);
        ReactDom.unmountComponentAtNode(div);
    })
});