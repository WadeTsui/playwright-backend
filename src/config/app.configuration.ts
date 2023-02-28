export default () => ({
    dataBase: {
      dbType: process.env.DB_TYPE || "mysql",
      dbHost: process.env.DB_HOST || "localhost",
      dbPort: parseInt(process.env.DB_PORT, 10) ||3306,
      dbUser: process.env.DB_USER || "root",
      dbPwd: process.env.DB_PWD || "root",
      dbDb: process.env.DB_DB,
    },
    task: {
      enableSchedule: process.env.ENABLE_SCHEDULE || false
    }
  });
