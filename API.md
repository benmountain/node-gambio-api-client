# API

## Table of contents

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