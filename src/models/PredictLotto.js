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
        freezeTableName: true,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.LottoRound, {
      foreignKey: {
        name: 'lottoRound_id',
        type: Sequelize.INTEGER,
        allowNull: true,
        targetKey: 'id',
      },
    });

    this.belongsTo(models.AlgorithmKind, {
      foreignKey: {
        name: 'algorithmKind_id',
        type: Sequelize.INTEGER,
        allowNull: true,
      },
    });
  }
}
