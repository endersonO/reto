import Server from './server';
import PortValueObject from './domain/valueObjects/port.valueObject';
//import http from 'http';

async function main() {
  const server = new Server(new PortValueObject(4000));
  await server.listen();
}

main();
