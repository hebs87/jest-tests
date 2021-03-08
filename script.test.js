const googleSearch = require('./script');

const dbMock = [
  'dog.com',
  'cheesepuff.com',
  'disney.com',
  'dogpictures.com',
];

// describe groups similar/related tests - takes a name, and a function containing the individual tests
describe('googleSearch', () => {
// it() takes 2 params - name of the test and a function containing the test itself
  it('this is a silly test', () => {
    expect('hello').toBe('hello');
  });

  it('is searching google', () => {
    expect(googleSearch('test', dbMock)).toEqual([]);
    expect(googleSearch('dog', dbMock)).toEqual(['dog.com', 'dogpictures.com']);
  });

  it('work with undefined and null input', () => {
    expect(googleSearch(undefined, dbMock)).toEqual([]);
    expect(googleSearch(null, dbMock)).toEqual([]);
  });

  it('does not return more than 3 matches', () => {
    expect(googleSearch('.com', dbMock).length).toEqual(3);
  });
});
