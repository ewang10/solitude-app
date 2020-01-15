import React from 'react';
import ReactDom from 'react-dom';
import EditJournal from './EditJournal';

describe('EditJournal Component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDom.render(<EditJournal />, div);
        ReactDom.unmountComponentAtNode(div);
    })
})