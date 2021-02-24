export default {
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'mariadb',
  logging: false,
  define: {
    freezeTableName: true,
    query: {
      raw: true,
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 3000,
      idle: 1000,
      connectTimeout: 1000,
    },
  },
  timestamps: false,
  underscored: false,
};
