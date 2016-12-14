import CreateClientInstanceScenario from './CreateClientInstanceScenario';
import CreateGetUpdateSearchDeleteAddressScenario from './CreateGetUpdateSearchDeleteAddressScenario';
import CreateGetUpdateSearchDeleteCategoryScenario from './CreateGetUpdateSearchDeleteCategoryScenario';
import GetCountryAndZonesScenario from './GetCountryAndZonesScenario';
import CreateGetUpdateSearchDeleteCustomerScenario from './CreateGetUpdateSearchDeleteCustomerScenario';
import QueueSendGetDeleteEmailScenario from './QueueSendGetDeleteEmailScenario';

CreateClientInstanceScenario()
  .then(CreateGetUpdateSearchDeleteAddressScenario)
  .then(CreateGetUpdateSearchDeleteCategoryScenario)
  .then(GetCountryAndZonesScenario)
  .then(CreateGetUpdateSearchDeleteCustomerScenario)
  .then(QueueSendGetDeleteEmailScenario);
