import convict from 'convict';
import { config } from 'dotenv';

config();

const overheiBackSettings = convict({
  environment: {
    doc: 'The overhei application environment.',
    format: ['development', 'testing', 'staging', 'production'],
    default: 'development',
    env: 'NODE_ENV'
  },
  port: {
    doc: 'The overhei application port.',
    format: Number,
    default: 3000,
    env: 'APPLICATION_OVERHEI_PORT'
  }
});

overheiBackSettings.validate({ allowed: 'strict' });
//overheiBackSettings.loadFile(`${__dirname}/config.${overheiBackSettings.get('environment')}.json`);

export default overheiBackSettings;
