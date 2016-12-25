const invoker = client => client.zones
  .getById(84)
  .then(() => client);

export default invoker;
