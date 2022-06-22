import React from 'react';
import BoardPage from './BoardPage';
import renderer from 'react-test-renderer';
import testData from '../../boardMembers.json';

describe('The Board Page', () => {
  it('renders as expected', () => {
    const tree = renderer
      .create(<BoardPage boardMembers={testData.boardMembers} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
