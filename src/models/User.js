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
        nickName: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        uuid: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        isSubscribe: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: true,
        },
        createdAt: {
          type: Sequelize.DATE,
        },
        updatedAt: {
          type: Sequelize.DATE,
        },
      },
      {
        modelName: 'User',
        freezeTableName: true,
        sequelize,
      }
    );
  }

  static associate(models) {
    this.hasMany(models.UserLottoScore);
  }

  static async countByUUID(uuid) {
    return this.count({ where: { uuid } });
  }
}
