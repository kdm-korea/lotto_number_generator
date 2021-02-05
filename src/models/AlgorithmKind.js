import Sequelize from 'sequelize';

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
        sequelize,
        tableName: 'AlgorithmKind',
      }
    );
  }

  static associate(models) {
    this.hasMany(models.PredictLotto);
    this.hasMany(models.PredictLottoPercent);
  }
}
