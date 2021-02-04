import Sequelize from 'sequelize';

export default class UserLottoScore extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
      },
      {
        sequelize,
        freezeTableName: true,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: {
        name: 'user_id',
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      as: 'users',
    });

    this.belongsTo(models.LottoScore, {
      foreignKey: {
        name: 'lottoScore_id',
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      as: 'lottos',
    });
  }
}
