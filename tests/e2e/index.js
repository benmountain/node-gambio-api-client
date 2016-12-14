import CreateClientInstanceScenario from './CreateClientInstanceScenario';
import CreateGetUpdateSearchDeleteAddressScenario from './CreateGetUpdateSearchDeleteAddressScenario';
import CreateGetUpdateSearchDeleteCategoryScenario from './CreateGetUpdateSearchDeleteCategoryScenario';
import GetCountryAndZonesScenario from './GetCountryAndZonesScenario';

CreateClientInstanceScenario()
  .then(CreateGetUpdateSearchDeleteAddressScenario)
  .then(CreateGetUpdateSearchDeleteCategoryScenario)
  .then(GetCountryAndZonesScenario);
