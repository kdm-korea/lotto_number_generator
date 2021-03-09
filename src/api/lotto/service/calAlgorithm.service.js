import _ from 'lodash';
import { kalmanFilter } from '../../../component/lottoAlgorithm';
import { AlgorithmKind } from '../../../models';

/** 알고리즘별로 확률을 계산하여 반환
 * @param {Array<AlgorithmKind>} algorithmKindsWithPercents 알고리즘들과 알고리즘별 퍼센트
 * @param {Array<number>} winBalls 로또 당첨볼
 */
const execCalAlgorithm = (algorithmKindsWithPercents, winBalls) => {
  const percents = [];

  const kalmanPercents = _.chain(algorithmKindsWithPercents)
    .filter({ kind: 'a' })
    .map('PredictLottoPercents')
    .value();
  const kalmanFilterResult = kalmanFilter(kalmanPercents, winBalls);

  _.merge(percents, kalmanFilterResult);
  return percents;
};

export default execCalAlgorithm;
