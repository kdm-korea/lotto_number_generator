import Sequelize from 'sequelize';

export default class PredictLottoPercent extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        ball: {
          type: Sequelize.INTEGER,
          allowNull: false,
          validate: {
            min: 1,
            max: 45,
          },
        },
        percent: {
          type: Sequelize.FLOAT,
          allowNull: false,
          defalutValue: 0.0,
        },
      },
      {
        modelName: 'PredictLottoPercent',
        freezeTableName: true,
        timestamps: false,
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.AlgorithmKind);
  }
}
