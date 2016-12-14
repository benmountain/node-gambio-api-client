import { customer } from './../../tools/tests/fixtures';

const invoker = client => client.customers
  .create(customer)
  .then(customer => customer.id)
  .then(id => client.customers.getById(id))
  .then(customer => client.customers.update(customer.id, { firstname: 'Bob' }))
  .then(() => client.customers.search('Bob'))
  .then(customers => customers[0].id)
  .then(id => client.customers.delete(id))
  .then(() => client);

export default invoker;
