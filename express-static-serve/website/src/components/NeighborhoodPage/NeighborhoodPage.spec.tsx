import React from 'react';
import renderer from 'react-test-renderer';
import NeighborhoodPage from './NeighborhoodPage';


describe.skip('The NeighborhoodPage Component', () => {
    describe.skip('The Snapshot', () => {
        it('should render as expected', () => {
            const jsonTree = renderer.create(<NeighborhoodPage />).toJSON();

            expect(jsonTree).toMatchSnapshot();
        })
    })
})