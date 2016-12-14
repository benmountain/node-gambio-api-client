import CreateClientInstanceScenario from './CreateClientInstanceScenario';
import CreateGetUpdateSearchDeleteAddressScenario from './CreateGetUpdateSearchDeleteAddressScenario';
import CreateGetUpdateSearchDeleteCategoryScenario from './CreateGetUpdateSearchDeleteCategoryScenario';

CreateClientInstanceScenario()
  .then(CreateGetUpdateSearchDeleteAddressScenario)
  .then(CreateGetUpdateSearchDeleteCategoryScenario);
