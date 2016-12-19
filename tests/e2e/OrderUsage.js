import {
  order as orderFixture,
  orderItem as orderItemFixture,
  orderItemAttribute as orderItemAttributeFixture,
  orderTotal as orderTotalFixture
} from './../../tools/fixtures';

const updateValue = 'blubb';

let orderId = null;
let orderItemId = null;
let orderItemAttributeId = null;
let orderTotalId = null;

const invoker = client => client.orders
  .create(orderFixture)
  .then(order => client.orders.getById(order.id))
  .then(order => client.orders.update(order.id, { comment: updateValue }))
  .then(order => { orderId = order.id })
  .then(order => client.orders.createItem(orderId, orderItemFixture))
  .then(item => { orderItemId = item.id })
  .then(() => client.orders.createAttribute(orderId, orderItemId, orderItemAttributeFixture))
  .then(attribute => { orderItemAttributeId = attribute.id })
  .then(() => client.orders.createTotal(orderId, orderTotalFixture))
  .then(total => { orderTotalId = total.id })
  .then(() => client.orders.updateTotal(orderId, orderTotalId, { title: updateValue }))
  .then(total => client.orders.getTotal(orderId, total.id))
  .then(total => client.orders.deleteTotal(orderId, total.id))
  .then(() => client.orders.getAttribute(orderId, orderItemId, orderItemAttributeId))
  .then(attribute => client.orders.updateAttribute(orderId, orderItemId, attribute.id, { name: updateValue }))
  .then(attribute => client.orders.deleteAttribute(orderId, orderItemId, attribute.id))
  .then(() => client.orders.getItem(orderId, orderItemId))
  .then(item => client.orders.updateItem(orderId, item.id, { name: updateValue }))
  .then(item => client.orders.deleteItem(orderId, item.id))
  .then(() => client.orders.delete(orderId))
  .then(() => client);

export default invoker;
