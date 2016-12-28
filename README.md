# Node client for the Gambio REST API

Performs requests to the integrated RESTful API of the [Gambio shop system](http://www.gambio.com).



**Features**

- Easy-to-read API
- Usage of Promises for chainable operations
- Fully tested (Unit and E2E tests)



To see a detailed list of recent changes please take a look into the [changelog](CHANGELOG.md).



## Table of contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)





## Installation

```
npm install gambio-api-client
```



## Usage

**Creating an instance**

To create a client instance you need to pass in the shop URL, administrator user and password credentials.

```js
import Client from 'gambio-api-client';

const instance = new Client({
  url: 'https://www.gambio-shop.de/shop2',
  user: 'admin@shop.de',
  password: '12345',
});
```



**Returning the client version**

To get the client version just access the static class property `VERSION` .

```js
const version = Client.VERSION;
```



**Performing requests**

You have access to the all resources described in the API documentation.

All methods return a `Promise` object, that are *then*able  and *catch*able.



**Simple example: Getting all existing customers**

```js
instance.customers.get()
	.then(customers => console.log(customers))
	.catch(error => console.error(error));
```



**More complex example: Deleting all addresses of customer 'John Doe'**

```js
function findJohnDoe(customer) {
  return (customer.firstname === 'John' && customer.lastname === 'Doe');
}

function deleteAllAddressesOfCustomer(addresses) {
  const promises = [];
  addresses.forEach(address => promises.push(instance.addresses.delete(address.id)));
  return Promise.all(promises)
}

instance.customers.search('Doe')
	.then(result => findJohnDoe)
	.then(customer => instance.customers.getAddresses(customer.id))
	.then(deleteAllAddressesOfCustomer)
	.then(() => console.log('Successfully deleted addresses'))
	.catch(console.error)
```



**More usage** 

To see all available API methods please refer to the [**API documentation**](API.md).



## Contributing

**Getting started**

To get started you may read the [contribution document](CONTRIBUTING.md).

Pull requests are always welcome.



**Security vulnerabilities**

If you encounter any security vulnerabilities, please contact [@rx2x](https://github.com/rx2x) (creator of this project) in place of creating an issue.



## License

[MIT](LICENSE)