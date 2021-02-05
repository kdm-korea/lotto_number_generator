import Sequelize from 'sequelize';

export default class UserLottoScore extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
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
        tableName: 'UserLottoScore',
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.User);

    this.belongsTo(models.LottoScore);
  }
}
