import Sequelize from 'sequelize';

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
      },
      {
        sequelize,
        timestamps: false,
        tableName: 'PredictLotto',
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.LottoRound, { freezeTableName: true });

    this.belongsTo(models.AlgorithmKind);

    this.hasMany(models.LottoScore);

    this.hasMany(models.LottoBall, {
      foreignKey: {
        allowNull: true,
      },
    });
  }
}
