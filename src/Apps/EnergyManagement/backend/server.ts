import bodyParser from 'body-parser';
import compress from 'compression';
import errorHandler from 'errorhandler';
import express, { Express } from 'express';
import helmet from 'helmet';
import Router from 'express-promise-router';
import * as http from 'http';

import PortValueObject from './domain/valueObjects/port.valueObject';
import ApplicationName from './domain/valueObjects/applicationName.valueObject';

import RouterRegister from './infrastructure/services/routeCreator.service';

class Server {
  private express: Express;
  readonly port: PortValueObject;
  public httpServer?: http.Server;

  constructor(port: PortValueObject) {
    this.port = port;
    this.express = express();
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: true }));
    this.express.use(helmet.xssFilter());
    this.express.use(helmet.noSniff());
    this.express.use(helmet.hidePoweredBy());
    this.express.use(helmet.frameguard({ action: 'deny' }));
    this.express.use(compress());

    const router = Router();
    router.use(errorHandler());
    this.express.use(router);

    const applicationName = new ApplicationName('EnergyManagement');
    console.log('construir router')
    const routeRegister = new RouterRegister(applicationName);

    routeRegister.execute(router);
  }

  async listen(): Promise<void> {
    const promisedListening = new Promise<void>(resolve => {
      this.httpServer = this.express.listen(this.port.value, () =>
        console.log(`The server is listening on port ${this.port.value}`)
      );
      resolve();
    });

    return promisedListening;
  }

  async stop(): Promise<void> {
    const promisedStopping = new Promise<void>((resolve, reject) => {
      if (this.httpServer) {
        this.httpServer.close(error => {
          if (error) {
            return reject(error);
          }
          return resolve();
        });
      }

      return resolve();
    });
    return promisedStopping;
  }
}

export default Server;