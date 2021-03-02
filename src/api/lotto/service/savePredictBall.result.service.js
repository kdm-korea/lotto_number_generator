import _ from 'lodash';
import { LottoBall, PredictLotto } from '../../../models';

/** 로또 예상한 로또볼들의 결과 저장
 * @param {Array<Number>} balls 로또 볼들
 * @param {Number} round 회차
 */
const execLottoResult = async (balls, round) => {
  const predictLottos = await PredictLotto.findByRound(round);

  await LottoBall.savePredictResult(balls, _.map(predictLottos, 'id'));
};

export default execLottoResult;
