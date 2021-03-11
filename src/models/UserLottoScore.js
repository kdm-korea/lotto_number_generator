import Sequelize from 'sequelize';
import { PredictLotto, User } from '.';

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
        modelName: 'UserLottoScore',
        freezeTableName: true,
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.User);

    this.belongsTo(models.PredictLotto);
  }

  /** 유저가 가진 예상로또의 정보와 유저의 정보를 제공하는 메소드
   * @param {number} id 예상로또 Id
   */
  static async findAllWithUserWithPredictLottoByLottoRoundId(id) {
    return this.findAll({
      include: [
        {
          model: User,
          right: true,
        },
        {
          model: PredictLotto,
          where: {
            lottoRoundId: id,
          },
          right: true,
        },
      ],
      raw: true,
      nest: true,
    });
  }
}
