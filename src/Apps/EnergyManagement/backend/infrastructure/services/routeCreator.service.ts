import ApplicationName from '../../domain/valueObjects/applicationName.valueObject';
import { Router } from 'express';
import glob from 'glob';

class RouterRegister {
  private applicationName: ApplicationName;

  constructor(applicationName: ApplicationName) {
    this.applicationName = applicationName;
  }

  execute(application: Router) {
    const routesPaths = glob.sync(__dirname + `/../../../../${this.applicationName.value}/**/*.route.*`);
    console.log('router paths', routesPaths);
    routesPaths.map((routePath: string) => {
      const route = require(routePath);
      console.log('route', route.register);
      route.register(application);
    });
  }
}

export default RouterRegister;
