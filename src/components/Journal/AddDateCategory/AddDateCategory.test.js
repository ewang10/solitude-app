import React from 'react';
import ReactDom from 'react-dom';
import AddDateCategory from './AddDateCategory';

describe('AddDateCategory Component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDom.render(<AddDateCategory />, div);
        ReactDom.unmountComponentAtNode(div);
    })
})