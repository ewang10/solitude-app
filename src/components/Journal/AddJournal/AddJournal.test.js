import React from 'react';
import ReactDom from 'react-dom';
import AddJournal from './AddJournal';

describe('AddJournal Component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDom.render(<AddJournal />, div);
        ReactDom.unmountComponentAtNode(div);
    })
})