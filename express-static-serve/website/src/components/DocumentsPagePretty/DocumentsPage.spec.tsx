import React from 'react';
import renderer from 'react-test-renderer';
import DocumentsPage from './DocumentsPage';

describe.skip('The DocumentsPage Component', () => {
  describe.skip('The Snapshot', () => {
    it('should render as expected', () => {
      const jsonTree = renderer
        .create(<DocumentsPage />)
        .toJSON();

      expect(jsonTree).toMatchSnapshot();
    });
  });
});
