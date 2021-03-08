const fetch = require('node-fetch');

const getPeople = async (fetch) => {
  const getRequest = await fetch('http://swapi.py4e.com/api/people');
  const data = await  getRequest.json();
  console.log(data);
  const {count, results} = data;
  return {
    count,
    results
  }
};

getPeople(fetch);
