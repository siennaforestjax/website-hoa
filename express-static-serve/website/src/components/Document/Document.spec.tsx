import React from 'react';
import renderer from 'react-test-renderer';
import HoaDocument from '../../interfaces/HoaDocument';
import Document from './Document';

const testDoc: HoaDocument = {
  filename: "fakeDoc.docx",
  createTime: 1658601393261.0945,
  fileSizeInBytes: 8388,
  location: 'c:\myfakepath'
}

describe('The DocumentsPage Component', () => {
  describe('The Snapshot', () => {
    it('should render as expected', () => {
      const jsonTree = renderer
        .create(<Document document={testDoc} />)
        .toJSON();

      expect(jsonTree).toMatchSnapshot();
    });
  });
});
