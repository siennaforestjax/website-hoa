import React from 'react';
import renderer from 'react-test-renderer';
import HeaderBar from './HeaderBar';

describe('The HeaderBar Component', () => {
    describe('The Snapshot', () => {
        it('should render as expected', () => {
            const jsonTree = renderer.create(<HeaderBar />).toJSON();

            expect(jsonTree).toMatchSnapshot();
        })
    })
})