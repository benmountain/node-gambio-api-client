# API

## Table of contents

- [Introduction](#introduction)
- [Addresses](#addresses)
  - [Create address](#create-address)
  - [Delete address](#delete-address)
  - [Get addresses](#get-addresses)
  - [Get specific address](#get-specific-address)
  - [Search addresses](#search-addresses)
  - [Update address](#update-address)
- [Categories](#categories)
  - [Create category](#create-category)
  - [Delete category](#delete-category)
  - [Get categories](#get-categories)
  - [Get specific category](#get-specific-category)
  - [Search categories](#search-categories)
  - [Update category](#update-category)
  - [Delete category icon](#delete-category-icon)
  - [Delete category image](#delete-category-image)
  - [Get child categories](#get-child-categories)
  - [Get category icons](#get-category-icons)
  - [Rename category icon](#rename-category-icon)
  - [Rename category image](#rename-category-image)
  - [Upload category icon](#upload-category-icon)
  - [Upload category image](#upload-category-image)
- [Countries](#countries)
  - [Get specific country](#get-specific-country)
  - [Get zones of a country](#get-zones-of-a-country)
- [Customers](#customers)
  - [Create customer](#create-customer)
  - [Delete customer](#delete-customer)
  - [Get customers](#get-customers)
  - [Get guest customers](#get-guest-customers)
  - [Get specific customer](#get-specific-customer)
  - [Get addresses of a customer](#get-addresses-of-a-customer)
  - [Search customers](#search-customers)
  - [Update customer](#update-customer)
- [Emails](#emails)
  - [Delete Email](#delete-email)
  - [Get Emails](#get-emails)
  - [Get specific Email](#get-specific-email)
  - [Get pending Emails](#get-pending-emails)
  - [Search Emails](#search-emails)
  - [Queue Email](#queue-email)
  - [Send Email](#send-email)
  - [Send specific Email](#send-specific-email)
  - [Upload Email attachment](#upload-email-attachment)
- [Orders](#orders)
  - [Create order item attribute](#create-order-item-attribute)
  - [Create order item property](#create-order-item-property)
  - [Create order item](#create-order-item)
  - [Create order total](#create-order-total)
  - [Create order](#create-order)
  - [Delete order item attribute](#delete-order-item-attribute)
  - [Delete order item property](#delete-order-item-property)
  - [Delete order total](#delete-order-total)
  - [Delete order item](#delete-order-item)
  - [Delete order](#delete-order)
  - [Get order history](#get-order-history)
  - [Get order history item](#get-order-history-item)
  - [Get order item attributes](#get-order-item-attributes)
  - [Get order item properties](#get-order-item-properties)
  - [Get order item attribute](#get-order-item-attribute)
  - [Get order item property](#get-order-item-property)
  - [Get order items](#get-order-items)
  - [Get order item](#get-order-item)
  - [Get order totals](#get-order-totals)
  - [Get order total](#get-order-total)
  - [Get orders](#get-orders)
  - [Get specific order](#get-specific-order)
  - [Search orders](#search-orders)
  - [Update order item attribute](#update-order-item-attribute)
  - [Update order item property](#update-order-item-property)
  - [Update order item](#update-order-item)
  - [Update order status](#update-order-status)
  - [Update order total](#update-order-total)
  - [Update order](#update-order)
- [Products](#products)
  - [Create product link](#create-product-link)
  - [Create product](#create-product)
  - [Delete product image](#delete-product-image)
  - [Delete product links](#delete-product-links)
  - [Delete product link](#delete-product-link)
  - [Delete product](#delete-product)
  - [Get products](#get-products)
  - [Get product links](#get-product-links)
  - [Get product link](#get-product-link)
  - [Get specific product](#get-specific-product)
  - [Search products](#search-products)
  - [Rename product image](#rename-product-image)
  - [Update product](#update-product)
  - [Update product link](#update-product-link)
  - [Upload product image](#upload-product-image)
- [Zones](#zones)
  - [Get specific zone](#get-specific-zone)



## Introduction

The Gambio shop system features a REST-ful API that is able to serve the application data to client consumers.

For more information you should refer to the [Gambio REST-API documentation](https://developers.gambio.de).



**Modifying GET requests**

All `get()` methods can optionally be modified according to the filtering options provided by the API.


Here is an example of a fully modified request:

```js
// Modifications.
const modified = {
  // Which page to return?
  // Use only in conjuction with 'entriesPerPage' value. 
  page: 2,
  
  // Limit entries per page.
  entriesPerPage: 5,
  
  // Sort response values (maximum 5 fields).
  sort: {
    // Ascending order.
    lastName: '+',
    
    // Descending order.
    age: '-',
  },
  
  // Show only these fields in the response.
  minimize: ['firstName', 'lastName', 'age'],
};

instance.addresses.get(modified);
```



## Adresses

### Create address

#### Usage

`instance.addresses.create(data)`

#### Parameters

- `data` - Address data (Object)

### Delete address

#### Usage

`instance.addresses.delete(id)`

#### Parameters

- `id` - Address ID (Number)

### Get addresses

#### Usage

`instance.addresses.get()`

### Get specific address

#### Usage

`instance.addresses.getById(id)`

#### Parameters

- `id` - Address ID (Number)

### Search addresses

#### Usage

`instance.addresses.search(term)`

#### Parameters

- `term` - Search term (String)

### Update address

#### Usage

`instance.addresses.update(id, data)`

#### Parameters

- `id` - Adress ID (Number)
- `data` - Adress data (Object)



## Categories

### Create category

#### Usage

`instance.categories.create(data)`

#### Parameters

- `data` - Category data (Object)

### Delete category

#### Usage

`instance.category.delete(id)`

#### Parameters

- `id` - Category ID (Number)

### Get categories

#### Usage

`instance.categories.get()`

### Get specific category

#### Usage

`instance.category.getById(id)`

#### Parameters

- `id` - Category ID (Number)

### Search categories

#### Usage

`instance.categories.search(term)`

#### Parameters

- `term` - Search term (String)

### Update category

#### Usage

`instance.categories.update(id, data)`

#### Parameters

- `id` - Category ID (Number)
- `data` - Category data (Object)

### Delete category icon

#### Usage

`instance.categories.deleteIcon(icon)`

#### Parameters

- `icon` - Category icon (String)

### Delete category image

#### Usage

`instance.categories.deleteImage(image)`

#### Parameters

- `image` - Category image (String)

### Get child categories

#### Usage

`instance.categories.getChild(id)`

#### Parameters

- `id` - Category ID (Number)

### Get category icons

#### Usage

`instance.categories.getIcons()`

### Rename category icon

#### Usage

`instance.categories.renameIcon(oldName, newName)`

#### Parameters

- `oldName` - Old category icon name (String)
- `newName` - New category icon name (String)

### Rename category image

#### Usage

`instance.categories.renameImage(oldName, newName)`

#### Parameters

- `oldName` - Old category image name (String)
- `newName` - New category image name (String)

### Upload category icon

#### Usage

`instance.categories.uploadIcon(path, name)`

#### Parameters

- `path` - Path to category icon (String)
- `name` - Desired file name (String)

### Upload category image

#### Usage

`instance.categories.uploadImage(path, name)`

#### Parameters

- `path` - Path to category image (String)
- `name` - Desired file name (String)



## Countries

### Get specific country

#### Usage

`instance.countries.getById(id)`

#### Parameters

- `id` - Country ID (Number)

### Get zones of a country

#### Usage

`instance.countries.getZonesByCountryId(id)`

#### Parameters

- `id` - Country ID (Number)



## Customers

### Create customer

#### Usage

`instance.customers.create(data)`

#### Parameters

- `data` - Customer data (Object)

### Delete customer

#### Usage

`instance.customers.delete(id)`

#### Parameters

- `id` - Customer ID (Number)

### Get customers

#### Usage

`instance.customers.get()`

### Get guest customers

#### Usage

`instance.customers.getGuests()`

### Get specific customer

#### Usage

`instance.customers.getById(id)`

#### Parameters

- `id` - Customer ID (Number)

### Get addresses of a customer 

#### Usage

`instance.customers.getAddresses(id)`

#### Parameters

- `id` - Customer ID (Number)

### Search customers

#### Usage

`instance.customers.search(term)`

#### Parameters

- `term` - Search term (String)

### Update customer

#### Usage

`instance.customers.update(id, data)`

#### Parameters

- `id` - Customer ID (Number)
- `data` - Customer data (Object)



## Emails

### Delete Email

#### Usage

`instance.emails.delete(id)`

#### Parameters

- `id` - Email ID (Number)

### Get Emails

#### Usage

`instance.emails.get()`

### Get specific Email

#### Usage

`instance.emails.getById(id)`

#### Parameters

- `id` - Email ID (Number)

### Get pending Emails

#### Usage

`instance.emails.getPending()`

### Search Emails

#### Usage

`instance.emails.search(term)`

#### Parameters

- `term` - Search term (String)

### Queue Email

#### Usage

`instance.emails.queue(data)`

#### Parameters

- `data` - Email data (Object)

### Send Email

#### Usage

`instance.emails.send(data)`

#### Parameters

- `data` - Email data (Object)

### Send specific Email

#### Usage

`instance.emails.sendById(id)`

#### Parameters

- `id` - Email ID (Number)

### Upload Email attachment

#### Usage

`instance.emails.uploadAttachment(path, name)`

#### Parameters

- `path` - Path to Email attachment (String)
- `name` - Desired file name (String)



## Orders

### Create order item attribute

#### Usage

`instance.orders.createAttribute(orderId, orderItemId, data)`

#### Parameters

- `orderId` - Order ID (Number)
- `orderItemId` - Order item ID (Number)
- `data` - Attribute data (Object)

### Create order item property

#### Usage

`instance.orders.createProperty(orderId, orderItemId, data)`

#### Parameters

- `orderId` - Order ID (Number)
- `orderItemId` - Order item ID (Number)
- `data` - Property data (Object)

### Create order item

#### Usage

`instance.orders.createItem(orderId, data)`

#### Parameters

- `orderId` - Order ID (Number)
- `data` - Order item data (Object)

### Create order total

#### Usage

`instance.orders.createTotal(orderId, data)`

#### Parameters

- `orderId` - Order ID (Number)
- `data` - Order total data (Object)

### Create order

#### Usage

`instance.orders.create(data)`

#### Parameters

- `data` - Order data (Object)

### Delete order item attribute

#### Usage

`instance.orders.deleteAttribute(orderId, orderItemId, orderItemAttributeId)`

#### Parameters

- `orderId` - Order ID (Number)
- `orderItemId` - Order item ID (Number)
- `orderItemAttributeId` - Order item attribute ID (Number)

### Delete order item property

#### Usage

`instance.orders.deleteProperty(orderId, orderItemId, orderItemPropertyId)`

#### Parameters

- `orderId` - Order ID (Number)
- `orderItemId` - Order item ID (Number)
- `orderItemPropertyId` - Order item property ID (Number)

### Delete order total

#### Usage

`instance.orders.deleteTotal(orderId, orderTotalId)`

#### Parameters

- `orderId` - Order ID (Number)
- `orderTotalId` - Order total ID (Number)

### Delete order item

#### Usage

`instance.orders.deleteItem(orderId, orderItemId)`

#### Parameters

- `orderId` - Order ID (Number)
- `orderItemId` - Order item ID (Number)

### Delete order

#### Usage

`instance.orders.delete(id)`

#### Parameters

- `id` - Order ID (Number)

### Get order history

#### Usage

`instance.orders.getHistory(id)`

#### Parameters

- `id` - Order ID (Number)

### Get order history item

#### Usage

`instance.orders.getHistoryById(orderId, orderHistoryId)`

#### Parameters

- `id` - Order ID (Number)
- `orderHistoryId` - Order history ID (Number)

### Get order item attributes

#### Usage

`instance.orders.getAttributes(orderId, orderItemId)`

#### Parameters

- `orderId` - Order ID (Number)
- `orderItemId` - Order item ID (Number)

### Get order item properties

#### Usage

`instance.orders.getProperties(orderId, orderItemId)`

#### Parameters

- `orderId` - Order ID (Number)
- `orderItemId` - Order item ID (Number)

### Get order item attribute

#### Usage

`instance.orders.getAttribute(orderId, orderItemId, orderItemAttributeId)`

#### Parameters

- `orderId` - Order ID (Number)
- `orderItemId` - Order item ID (Number)
- `orderItemAttributeId` - Order item attribute ID (Number)

### Get order item property

#### Usage

`instance.orders.getProperty(orderId, orderItemId, orderItemPropertyId)`

#### Parameters

- `orderId` - Order ID (Number)
- `orderItemId` - Order item ID (Number)
- `orderItemPropertyId` - Order item property ID (Number)

### Get order items

#### Usage

`instance.orders.getItems(id)`

#### Parameters

- `id` - Order ID (Number)

### Get order item

#### Usage

`instance.orders.getItem(orderId, orderItemId)`

#### Parameters

- `orderId` - Order ID (Number)
- `orderItemId` - Order item ID (Number)

### Get order totals

#### Usage

`instance.orders.getTotals(id)`

#### Parameters

- `id` - Order ID (Number)

### Get order total

#### Usage

`instance.orders.getTotal(orderId, orderTotalId)`

#### Parameters

- `orderId` - Order ID (Number)
- `orderTotalId` - Order total ID (Number)

### Get orders

#### Usage

`instance.orders.get()`

### Get specific order

#### Usage

`instance.orders.getById(id)`

#### Parameters

- `id` - Order ID (Number)

### Search orders

#### Usage

`instance.orders.search(term)`

#### Parameters

- `term` - Search term (String)

### Update order item attribute

#### Usage

`instance.orders.updateAttribute(orderId, orderItemId, orderItemAttributeId, data)`

#### Parameters

- `orderId` - Order ID (Number)
- `orderItemId` - Order item ID (Number)
- `orderItemAttributeId` - Order item attribute ID (Number)
- `data` - Order item attribute data (Object)

### Update order item property

#### Usage

`instance.orders.updateProperty(orderId, orderItemId, orderItemPropertyId, data)`

#### Parameters

- `orderId` - Order ID (Number)
- `orderItemId` - Order item ID (Number)
- `orderItemPropertyId` - Order item property ID (Number)
- `data` - Order item property data (Object)

### Update order item

#### Usage

`instance.orders.updateItem(orderId, orderItemId, data)`

#### Parameters

- `orderId` - Order ID (Number)
- `orderItemId` - Order item ID (Number)
- `data` - Order item data (Object)

### Update order status

#### Usage

`instance.orders.updateStatus(id, data)`

#### Parameters

- `id` - Order ID (Number)
- `data` - Order status data (Object)

### Update order total

#### Usage

`instance.orders.updateTotal(orderId, orderTotalId, data)`

#### Parameters

- `orderId` - Order ID (Number)
- `orderTotalId` - Order total ID (Number)
- `data` - Order total data (Object)

### Update order

#### Usage

`instance.orders.update(id, data)`

#### Parameters

- `id` - Order ID (Number)
- `data` - Order data (Object)



## Products

### Create product link

#### Usage

`instance.products.createLink(productId, categoryId)`

#### Parameters

- `productId` - Product ID (Number)
- `categoryID` - Category ID (Number)

### Create product

#### Usage

`instance.products.create(data)`

#### Parameters

- `data` - Product data (Object)

### Delete product image

#### Usage

`instance.products.deleteImage(image)`

#### Parameters

- `image` - Product image (String)

### Delete product links

#### Usage

`instance.products.deleteLinks(id)`

#### Parameters

- `id` - Product ID (Number)

### Delete product

#### Usage

`instance.products.delete(id)`

#### Parameters

- `id` - Product ID (Number)

### Get products

#### Usage

`instance.products.get()`

### Get product links

#### Usage

`instance.products.getLinks(id)`

#### Parameters

- `id` - Product ID (Number)

### Get product link

#### Usage

`instance.products.getLink(orderId, categoryId)`

#### Parameters

- `orderId` - Product ID (Number)
- `categoryId` - Category ID (Number)

### Get specific product

#### Usage

`instance.products.getById(id)`

#### Parameters

- `id` - Product ID (Number)

### Search products

#### Usage

`instance.products.search(term)`

#### Parameters

- `term` - Search term (String)

### Rename product image

#### Usage

`instance.products.renameImage(oldFilename, newFilename)`

#### Parameters

- `oldFilename` - Old product image name (String)
- `newFilename` - New product image name (String)

### Update product

#### Usage

`instance.products.update(id, data)`

#### Parameters

- `id` - Product ID (Number)
- `data` - Product data (Object)

### Update product link

#### Usage

`instance.products.updateLink(productId, oldCategoryId, newCategoryId)`

#### Parameters

- `productId` - Product ID (Number)
- `newCategoryId` - Old category ID (Number)
- `newCategoryId` - New category ID (Number)

### Upload product image

#### Usage

`instance.products.uploadImage(filePath, fileName)`

#### Parameters

- `filePath` - File path to product image (String)
- `fileName` - Desired product image name (String)



## Zones

### Get specific zone

#### Usage

`instance.zones.getById(id)`

#### Parameters

- `id` - Zone ID (Number)