import { Op } from 'sequelize';
import _ from 'underscore';
import { LottoBall, LottoRound, PredictLotto } from '../../../models';

/**
 * @param {Number} round 회차
 */
const findPredictLottoByRound = async (round) => {
  return PredictLotto.findAll({
    include: {
      model: LottoRound,
      right: true,
      attributes: [],
      where: {
        round,
      },
    },
    raw: true,
  });
};

/**
 * @param {Number} predictLottoIds 예상로또 Idx
 * @param {Array<Number>} balls 로또 볼들
 */
const saveResultBalls = async (predictLottoIds, balls) => {
  return LottoBall.update(
    {
      isCorrect: true,
    },
    {
      where: {
        [Op.and]: [{ ball: balls }, { predictLottoId: predictLottoIds }],
      },
      raw: true,
    }
  );
};

/** 로또 예상번호 결과 저장
 * @param {Number} round 회차
 * @param {Array<Number>} balls 로또 볼들
 */
const execLottoResult = async (round, balls) => {
  const predictLottos = await findPredictLottoByRound(round);

  await saveResultBalls(_.pluck(predictLottos, 'id'), balls);
};

export default execLottoResult;
