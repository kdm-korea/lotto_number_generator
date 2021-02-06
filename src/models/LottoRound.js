import Sequelize from 'sequelize';

export default class LottoRound extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        round: {
          type: Sequelize.INTEGER,
          allowNull: false,
          uniqueKey: true,
        },
        createdAt: {
          type: Sequelize.DATE,
        },
        updatedAt: {
          type: Sequelize.DATE,
        },
      },
      {
        modelName: 'LottoRound',
        freezeTableName: true,
        sequelize,
      }
    );
  }

  static associate(models) {
    this.hasMany(models.PredictLotto);

    this.hasMany(models.LottoBall, {
      foreignKey: { name: 'LottoWin', allowNull: true },
    });
  }
}
