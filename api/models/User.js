const Sequelize = require("sequelize");

const connection = new Sequelize(process.env.DATABASE_URL);
connection.authenticate().then(() => console.log("Database connected"));

class User extends Sequelize.Model {}
User.init(
  {
    email: {
      type: Sequelize.DataTypes.STRING,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: Sequelize.DataTypes.STRING,
    },
    lastname: Sequelize.DataTypes.STRING,
    firstname: Sequelize.DataTypes.STRING,
  },
  {
    sequelize: connection,
  }
);

connection.sync();

module.exports = User;
