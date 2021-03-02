import Sequelize from 'sequelize';
import { LottoBall, LottoRound } from './index';

export default class PredictLotto extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        ranking: {
          type: Sequelize.INTEGER,
          allowNull: false,
          defaultValue: -1,
        },
      },
      {
        modelName: 'PredictLotto',
        freezeTableName: true,
        timestamps: false,
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.LottoRound, { freezeTableName: true });

    this.belongsTo(models.AlgorithmKind);

    this.hasMany(models.UserLottoScore);

    this.hasMany(models.LottoBall, {
      foreignKey: {
        allowNull: true,
      },
    });
  }

  /**
   * 조회하는 회차의 예측한 로또 반환
   * @param {number} round 로또 회차
   */
  static async findByRound(round) {
    return this.findAll({
      include: {
        model: LottoRound,
        right: true,
        attributes: [],
        where: {
          round,
        },
      },
      raw: true,
    });
  }

  /**
   * 현재 회차의 예측한 로또 볼들을 반환
   * @param {Number} round 회차
   */
  static async findPredictBallByRound(round) {
    return PredictLotto.findAll({
      include: [
        {
          model: LottoBall,
          right: true,
        },
        {
          model: LottoRound,
          right: true,
          attributes: [],
          where: {
            round,
          },
        },
      ],
    });
  }
}
