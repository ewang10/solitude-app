import React from 'react';
import ReactDom from 'react-dom';
import RegistrationForm from './RegistrationForm';

describe('RegistrationForm Component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDom.render(<RegistrationForm />, div);
        ReactDom.unmountComponentAtNode(div);
    })
});