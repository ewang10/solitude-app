import React from 'react';
import ReactDom from 'react-dom';
import Button from './Button';

describe('Button Component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDom.render(<Button />, div);
        ReactDom.unmountComponentAtNode(div);
    })
})