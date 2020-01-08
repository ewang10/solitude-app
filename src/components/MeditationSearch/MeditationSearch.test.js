import React from 'react';
import ReactDom from 'react-dom';
import MeditationSearch from './MeditationSearch';

describe('MeditationSearch Component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDom.render(<MeditationSearch />, div);
        ReactDom.unmountComponentAtNode(div);
    })
});