import CreateClientInstanceScenario from './CreateClientInstanceScenario';
import CreateGetUpdateSearchDeleteAddressScenario from './CreateGetUpdateSearchDeleteAddressScenario';

CreateClientInstanceScenario()
  .then(CreateGetUpdateDeleteAddressScenario);