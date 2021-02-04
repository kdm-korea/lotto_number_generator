import Sequelize from 'sequelize';

export default class LottoBall extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        num: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        ball: {
          type: Sequelize.INTEGER,
          allowNull: false,
          validate: {
            min: 1,
            max: 45,
          },
        },
        isCorrect: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defalutValue: false,
        },
      },
      {
        sequelize,
        freezeTableName: true,
      },
      {
        indexes: [
          {
            fields: ['predictLotto_id'],
          },
          {
            fields: ['lottoWin'],
          },
        ],
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.PredictLotto, {
      foreignKey: {
        name: 'predictLotto_id',
        type: Sequelize.INTEGER,
      },
    });

    this.belongsTo(models.LottoRound, {
      foreignKey: {
        name: 'lottoWin',
        type: Sequelize.INTEGER,
      },
    });
  }
}
