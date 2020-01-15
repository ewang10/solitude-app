import React from 'react';
import ReactDom from 'react-dom';
import SearchItem from './SearchItem';

describe('SearchItem Component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDom.render(<SearchItem />, div);
        ReactDom.unmountComponentAtNode(div);
    })
});