import Sequelize from 'sequelize';

export default class LottoScore extends Sequelize.Model {
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
          defaultValue: 7,
          min: 1,
          max: 7,
        },
      },
      {
        sequelize,
        freezeTableName: true,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.PredictLotto, {
      foreignKey: {
        name: 'predictLotto_id',
        type: Sequelize.INTEGER,
        allowNull: false,
        sourceKey: 'id',
      },
    });
  }
}
