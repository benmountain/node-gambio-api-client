import ClientUsage from './ClientUsage';
import AddressUsage from './AddressUsage';
import CategoryUsage from './CategoryUsage';
import ZoneUsage from './ZoneUsage';
import CustomerUsage from './CustomerUsage';
import EmailUsage from './EmailUsage';
import OrderUsage from './OrderUsage';

ClientUsage()
  .then(AddressUsage)
  .then(CategoryUsage)
  .then(ZoneUsage)
  .then(CustomerUsage)
  .then(EmailUsage)
  .then(OrderUsage);
