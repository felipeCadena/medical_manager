const config = {
  username: 'medical_user',
  password: 'password',
  database: 'medical_db',
  host: 'medical_db',
  dialect: 'mysql',
};

module.exports = {
  development: config,
  test: config,
  production: config,
};