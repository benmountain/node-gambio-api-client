import loginValues from './../../tools/tests/values/login.json';
import Client from './../..';

const scenario = resolve => {
  const client = new Client(loginValues);
  resolve(client);
};

const invoker = () => new Promise(scenario);

export default invoker;