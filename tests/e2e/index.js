import CreateClientInstanceScenario from './CreateClientInstanceScenario';
import CreateGetUpdateSearchDeleteAddressScenario from './CreateGetUpdateSearchDeleteAddressScenario';
import CreateGetUpdateSearchDeleteCategoryScenario from './CreateGetUpdateSearchDeleteCategoryScenario';
import GetCountryAndZonesScenario from './GetCountryAndZonesScenario';
import CreateGetUpdateSearchDeleteCustomerScenario from './CreateGetUpdateSearchDeleteCustomerScenario';

CreateClientInstanceScenario()
  .then(CreateGetUpdateSearchDeleteAddressScenario)
  .then(CreateGetUpdateSearchDeleteCategoryScenario)
  .then(GetCountryAndZonesScenario)
  .then(CreateGetUpdateSearchDeleteCustomerScenario);
