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
          defaultValue: false,
        },
      },
      {
        sequelize,
        tableName: 'LottoBall',
        timestamps: false,
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
}
