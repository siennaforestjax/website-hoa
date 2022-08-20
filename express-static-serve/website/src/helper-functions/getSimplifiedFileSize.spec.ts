import getSimplifiedFileSize from './getSimplifiedFileSize';

describe.skip('The getSimplifiedFileSize method', () => {
  it('should display as bytes when less than 1 kilobyte', () => {
    const givenFileSize = 1023;
    const expectedSize = 1023;
    const expectedUnit = 'bytes';

    const { size, unit } = getSimplifiedFileSize(givenFileSize);

    expect(size).toBe(expectedSize);
    expect(unit).toBe(expectedUnit);
  });

  it('should display as kilobytes when less than 1 megabyte', () => {
    const givenFileSize = 1038091;
    const expectedSize = 1013.8;
    const expectedUnit = 'KB';

    const { size, unit } = getSimplifiedFileSize(givenFileSize);

    expect(size).toBe(expectedSize);
    expect(unit).toBe(expectedUnit);
  });

  it('should display as megabytes when less than 1 gigabyte', () => {
    const givenFileSize = 1063004406;
    const expectedSize = 1013.8;
    const expectedUnit = 'MB';

    const { size, unit } = getSimplifiedFileSize(givenFileSize);

    expect(size).toBe(expectedSize);
    expect(unit).toBe(expectedUnit);
  });

  it('should display as gigabytes when greater than or equal to 1 gigabyte', () => {
    const givenFileSize = 1073741824;
    const expectedSize = 1.0;
    const expectedUnit = 'GB';

    const { size, unit } = getSimplifiedFileSize(givenFileSize);

    expect(size).toBe(expectedSize);
    expect(unit).toBe(expectedUnit);
  });
});
