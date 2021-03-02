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

  /**
   * 현재 로또 회차 조회
   * @response
   * @param {Object} LottoRound
   */
  static async getCurrentRound() {
    return this.findOne({
      attributes: ['id', 'round'],
      order: [['round', 'DESC']],
      raw: true,
    });
  }

  static async createNextRound() {
    const currentRound = await this.max('round');
    await this.create({ round: currentRound + 1 });
  }
}
