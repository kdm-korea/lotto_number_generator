import { Op } from 'sequelize';
import _ from 'underscore';
import {
  LottoBall,
  LottoRound,
  LottoScore,
  PredictLotto,
} from '../../../models';
import { calLottoRank } from '../../../util/calLottoRank';

/** 현재 회차의 예상 로또
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

const findPredictLottoBallResult = async (predictIds) =>
  (
    await PredictLotto.findAll({
      where: { id: predictIds },
      attributes: ['lottoScoreId'],
      include: {
        model: LottoBall,
        attributes: ['isCorrect'],
        right: true,
      },
    })
  ).map((o) => o.get({ raw: true }));

/** 예상 로또 볼 결과 저장
 * @param {Number} predictLottoIds 예상로또 Idx
 * @param {Array<Number>} balls 로또 볼들
 */
const savePredictBallsResult = async (predictLottoIds, balls) => {
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

// 데이터 셀렉트
const savePredictLottoScore = async (predictIds) => {
  const predictLottos = await findPredictLottoBallResult(predictIds);

  const scores = predictLottos.map((predictLotto) => {
    const predictBallresults = _.pluck(
      predictLotto.LottoBalls.map((lottoBall) => lottoBall.get({ raw: true })),
      'isCorrect'
    );
    return {
      id: predictLotto.lottoScoreId,
      ranking: calLottoRank(predictBallresults),
    };
  });

  await LottoScore.bulkCreate(scores, {
    updateOnDuplicate: ['ranking'],
  });
};

/** 로또 예상번호 결과 저장
 * @param {Number} round 회차
 * @param {Array<Number>} balls 로또 볼들
 */
const execLottoResult = async (round, balls) => {
  const predictLottos = await findPredictLottoByRound(round);

  const predictIds = _.pluck(predictLottos, 'id');

  await savePredictBallsResult(predictIds, balls);

  await savePredictLottoScore(predictIds);
};

export default execLottoResult;
