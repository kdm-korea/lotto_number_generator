import _ from 'lodash';
import { LottoBall, PredictLotto } from '../../../models';

/** 로또 예상한 로또볼들의 결과 저장
 * @param {Number} round 회차
 * @param {Array<Number>} balls 로또 볼들
 */
const execLottoResult = async (lottoWin) => {
  const predictLottos = await PredictLotto.findByRound(lottoWin.round);

  await LottoBall.savePredictResult(lottoWin.balls, _.map(predictLottos, 'id'));
};

export default execLottoResult;
