import _ from 'lodash';
import { kalmanFilter } from '../../../component/lottoAlgorithm';
import { AlgorithmKind } from '../../../models';

/** 알고리즘별로 확률을 계산하여 반환
 * @param {Array<AlgorithmKind>} algorithmKindsWithPercents 알고리즘들과 알고리즘별 퍼센트
 * @param {Array<number>} winBalls 로또 당첨볼
 */
const execCalAlgorithm = async (algorithmKindsWithPercents, winBalls) => {
  const result = [];

  const kalmanPercents = await Promise.all(
    _.map(
      _.filter(algorithmKindsWithPercents, { kind: 'kalmanFilter' }),
      'PredictLottoPercents'
    )
  );

  const kalmanFilterResult = await kalmanFilter(kalmanPercents, winBalls);

  await Promise.all(_.merge(result, kalmanFilterResult));

  return result;
};

export default execCalAlgorithm;
