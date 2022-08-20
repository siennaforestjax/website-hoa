import React from 'react';
import renderer from 'react-test-renderer';
import NavBar from './NavBar';

describe.skip('The NavBar Component', () => {
    describe.skip('The Snapshot', () => {
        it('should render as expected', () => {
            const tree = renderer.create(<NavBar />).toJSON();

            expect(tree).toMatchSnapshot();
        })
    })
})