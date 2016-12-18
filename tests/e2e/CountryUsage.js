const country = 81;

const invoker = client => client.countries
  .getById(country)
  .then(country => country.id)
  .then(id => client.countries.getZonesByCountryId(id))
  .then(() => client);

export default invoker;
