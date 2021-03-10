const fetch = require('node-fetch');
const getPeople = require('./asyncScript');

describe('swapi tests', () => {
  // With async tests, we specify the number of expected assertions
  // If using the fetch().then() syntax, we have to make sure to return the promise for the tests to work
  it('calls swapi to get people', async () => {
    expect.assertions(2);
    const data = await getPeople(fetch);
    expect(data.count).toEqual(87);
    expect(data.results.length).toBeGreaterThan(5);
  });
});
