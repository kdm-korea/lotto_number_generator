import Sequelize, { Op } from 'sequelize';

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
          defaultValue: false,
        },
      },
      {
        modelName: 'LottoBall',
        freezeTableName: true,
        timestamps: false,
        sequelize,
      },
      {
        indexes: [
          {
            fields: ['predictLotto_id'],
          },
          {
            fields: ['lottWin'],
          },
        ],
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.PredictLotto, { freezeTableName: true });

    this.belongsTo(models.LottoRound, { foreignKey: 'LottoWin' });
  }

  /**
   * 당첨된 볼의 결과를 저장
   * @param {Array[number]} balls 당첨된 로또 볼
   * @param {Array[number]} predictLottoIds 예측한 로또의 Id
   */
  static async savePredictResult(balls, predictLottoIds) {
    this.update(
      {
        isCorrect: true,
      },
      {
        where: {
          [Op.and]: [{ ball: balls }, { predictLottoId: predictLottoIds }],
        },
      }
    );
  }
}
