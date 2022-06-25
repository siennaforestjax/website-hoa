import React from 'react';
import renderer from 'react-test-renderer';
import NeighborhoodPage from './NeighborhoodPage';


describe('The NeighborhoodPage Component', () => {
    describe('The Snapshot', () => {
        it('should render as expected', () => {
            const jsonTree = renderer.create(<NeighborhoodPage />).toJSON();

            expect(jsonTree).toMatchSnapshot();
        })
    })
})