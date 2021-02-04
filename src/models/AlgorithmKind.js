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
          type: Sequelize.INTEGER,
          allowNull: false,
          uniqueKey: true,
        },
      },
      {
        sequelize,
        freezeTableName: true,
      }
    );
  }
}
