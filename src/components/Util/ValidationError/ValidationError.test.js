import React from 'react';
import ReactDom from 'react-dom';
import ValidationError from './ValidationError';

describe('ValidationError Component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDom.render(<ValidationError />, div);
        ReactDom.unmountComponentAtNode(div);
    });
});