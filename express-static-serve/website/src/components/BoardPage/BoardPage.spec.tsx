import React from 'react';
import BoardPage from './BoardPage';
import renderer from 'react-test-renderer';
import testData from '../../boardMembers.json';

describe.skip('The Board Page', () => {
  
  describe.skip('The Snapshot', () => {

    it('renders as expected', () => {
      const tree = renderer
        .create(<BoardPage boardMembers={testData.boardMembers} />)
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe.skip('The component', () => {
    it('maps divs based on props', () => {
      const tree = renderer.create(<BoardPage boardMembers={testData.boardMembers} />);
      const component = tree.root;
      
      const sections = component.findAllByType('section');

      expect(sections.length).toBe(testData.boardMembers.length);
  
    });
  });
});


