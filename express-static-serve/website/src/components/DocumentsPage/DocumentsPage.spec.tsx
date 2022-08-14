import React from 'react';
import renderer from 'react-test-renderer';
import DocumentsPage from './DocumentsPage';
import testData from '../../hoaDocuments.json';

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
