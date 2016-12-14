import { loginData } from './../../tools/tests/values';
import Client from './../..';

const scenario = resolve => {
  const client = new Client(loginData);
  resolve(client);
};

const invoker = () => new Promise(scenario);

export default invoker;