import React from 'react';
import renderer from 'react-test-renderer';
import HeaderBar from './HeaderBar';

describe.skip('The HeaderBar Component', () => {
    describe.skip('The Snapshot', () => {
        it('should render as expected', () => {
            const jsonTree = renderer.create(<HeaderBar />).toJSON();

            expect(jsonTree).toMatchSnapshot();
        })
    })
})