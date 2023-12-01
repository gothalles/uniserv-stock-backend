import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: '187.85.164.169',
        port: 3306,
        username: 'uniservtelecomun_teste',
        password: 'Vx]Q^W]8IXsA',
        database: 'uniservtelecomun_qas',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: false,
      });

      return dataSource.initialize();
    },
  },
];
