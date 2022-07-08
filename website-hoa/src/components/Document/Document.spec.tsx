import React from 'react';
import renderer from 'react-test-renderer';
import Document from './Document';
import testData from '../../hoaDocuments.json';

describe('The DocumentsPage Component', () => {
  describe('The Snapshot', () => {
    it('should render as expected', () => {
      const jsonTree = renderer
        .create(<Document document={testData.documents[0]} />)
        .toJSON();

      expect(jsonTree).toMatchSnapshot();
    });
  });
});
