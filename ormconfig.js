module.exports = {
  type: 'mysql',
  host: 'localhost',
  port: 33060,
  username: 'iago',
  password: 'myslq2401',
  database: 'mysql',
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
  cli: {
    migrationsDir: 'src/migrations',
  },
};
