import { login } from './../../tools/fixtures';
import Client from './../..';

const scenario = resolve => {
  const client = new Client(login);
  resolve(client);
};

const invoker = () => new Promise(scenario);

export default invoker;