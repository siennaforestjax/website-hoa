import React from 'react';
import BoardPage from './BoardPage';
import renderer from 'react-test-renderer';
import testData from '../../boardMembers.json';

describe('The Board Page', () => {
  
  describe('The Snapshot', () => {

    it('renders as expected', () => {
      const tree = renderer
        .create(<BoardPage boardMembers={testData.boardMembers} />)
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe('The component', () => {
    it('maps divs based on props', () => {
      const tree = renderer.create(<BoardPage boardMembers={testData.boardMembers} />);
      const component = tree.root;
      
      const sections = component.findAllByType('section');

      expect(sections.length).toBe(testData.boardMembers.length);
  
    });
  });
});


