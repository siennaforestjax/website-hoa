import React from 'react';
import renderer from 'react-test-renderer';
import NavBar from './NavBar';

describe('The NavBar Component', () => {
    describe('The Snapshot', () => {
        it('should render as expected', () => {
            const tree = renderer.create(<NavBar />).toJSON();

            expect(tree).toMatchSnapshot();
        })
    })
})