import Sequelize from 'sequelize';

export default class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        nickNmae: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        uuid: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        createdAt: {
          type: Sequelize.DATE,
        },
        updatedAt: {
          type: Sequelize.DATE,
        },
      },
      {
        sequelize,
        tableName: 'User',
      }
    );
  }

  static associate(models) {
    this.hasMany(models.UserLottoScore);
  }
}
