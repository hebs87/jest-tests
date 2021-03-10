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

  // Creating mocks and spies - fake a function and pretend to have it running
  it('getPeople returns count and results', async () => {
    // jest.fn() creates a mock, and we can then fake the fetch call by returning dummy data
    const mockFetch = jest.fn()
      .mockReturnValue(Promise.resolve({
        json: () => Promise.resolve({
          count: 87,
          results: [0, 1, 2, 3, 4, 5],
        })
      }));
    // We then pass our mock function into the API call
    const data = await getPeople(mockFetch);
    expect.assertions(4);
    // Test the number of times the mock has been called
    expect(mockFetch.mock.calls.length).toEqual(1);
    // Test that the mock function is called with the correct URL for the API call
    expect(mockFetch).toBeCalledWith('http://swapi.py4e.com/api/people');
    expect(data.count).toEqual(87);
    expect(data.results.length).toBeGreaterThan(5);
  });
});
