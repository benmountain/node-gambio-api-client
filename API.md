# API

## Table of contents

- [Addresses](#addresses)
  - [Create address](#create-address)
  - [Delete address](#delete-address)
  - [Get addresses](#get-addresses)
  - [Get specific address](#get-specific-address)
  - [Search addresses](#search-addresses)
  - [Update address](#update-address)
- Categories
- Countries
- Customers
- Emails
- Orders

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