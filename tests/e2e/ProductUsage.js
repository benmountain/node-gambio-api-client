import {
  product as productFixture,
  productLink as productLinkFixture,
  image,
} from './../../tools/fixtures';

const updateValue = 'blubb';

const imagePath = image;
const imageName = 'hey.png';
const imageNameRenamed = 'hey-renamed.png';

let productId = null;
const categoryId = productLinkFixture.categoryId;

const invoker = client => client.products
  .create(productFixture)
  .then(product => { productId = product.id })
  .then(() => client.products.getById(productId))
  .then(product => client.products.update(product.id, { productModel: updateValue }))
  .then(() => client.products.search(updateValue))
  .then(products => products[0].id)
  .then(() => client.products.createLink(productId, categoryId))
  .then(() => client.products.updateLink(productId, categoryId, categoryId))
  .then(() => client.products.deleteLinks(productId))
  .then(() => client.products.uploadImage(imagePath, imageName))
  .then(() => client.products.renameImage(imageName, imageNameRenamed))
  .then(() => client.products.deleteImage(imageNameRenamed))
  .then(() => client.products.delete(productId))
  .then(() => client);

export default invoker;
