import Sequelize from 'sequelize';
import { PredictLottoPercent } from '.';

export default class AlgorithmKind extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        kind: {
          type: Sequelize.STRING,
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
        modelName: 'AlgorithmKind',
        freezeTableName: true,
        sequelize,
      }
    );
  }

  static associate(models) {
    this.hasMany(models.PredictLotto);
    this.hasMany(models.PredictLottoPercent);
  }

  /** 모든 종류의 알고리즘을 각 볼의 퍼센트와 함께 반환
   */
  static async findAllWithAlgorithmPercent() {
    return this.findAll({
      include: {
        model: PredictLottoPercent,
        left: true,
      },
      raw: true,
      nest: true,
    });
  }
}
