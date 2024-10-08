import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {

  name: 'test_9wg1',
  connector: 'postgresql',
  url: 'postgresql://test_9wg1_user:NHNpxQn7sHKceZiPuJaHyqGByy0Sy0Oe@dpg-crtrf9t2ng1s73cdi7c0-a.frankfurt-postgres.render.com/test_9wg1',
  ssl: true,


  // name: 'db',
  // connector: 'postgresql',
  // url: '',
  // host: 'localhost',
  // port: 5432,
  // user: 'postgres',
  // password: 'pass',
  // database: 'test'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class DbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'db';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.db', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
