const googleDatabase = [
  'dogs.com',
  'souprecipes.com',
  'flowers.com',
  'animals.com',
  'dogpictures.com',
  'myfavouritedogs.com',
  'dogsarethebest.com',
];

const googleSearch = (searchInput, db) => {
  const matches = db.filter(website => (
    website.includes(searchInput)
  ));

  return matches.length > 3 ? matches.slice(0, 3) : matches;
};

module.exports = googleSearch;

// console.log(googleSearch('dog', googleDatabase));
