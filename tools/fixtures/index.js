import path from 'path';

import address from './address.json';
import category from './category.json';
import customer from './customer.json';
import email from './email.json';
import order from './order.json';
import orderItem from './orderItem.json';
import orderItemAttribute from './orderItemAttribute.json';
import orderTotal from './orderTotal.json';
import login from './login.json';
import product from './product.json';
import productLink from './productLink.json';

const file = path.resolve(path.join(__dirname, 'file.txt'));
const image = path.resolve(path.join(__dirname, 'image.png'));

export {
  address,
  category,
  customer,
  email,
  order,
  orderItem,
  orderItemAttribute,
  orderTotal,
  file,
  image,
  login,
  product,
  productLink,
};