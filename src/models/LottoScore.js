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
        modelName: 'LottoScore',
        freezeTableName: true,
        timestamps: false,
        sequelize,
      }
    );
  }

  static associate(models) {
    this.hasMany(models.PredictLotto);

    this.hasMany(models.UserLottoScore);
  }
}
