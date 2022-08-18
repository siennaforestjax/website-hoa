import React from 'react';
import renderer from 'react-test-renderer';
import DocumentsPage from './DocumentsPage';

describe('The DocumentsPage Component', () => {
  describe('The Snapshot', () => {
    it('should render as expected', () => {
      const jsonTree = renderer
        .create(<DocumentsPage />)
        .toJSON();

      expect(jsonTree).toMatchSnapshot();
    });
  });
});
