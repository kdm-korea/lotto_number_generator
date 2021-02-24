import { PredictLottoPercent } from '../../../models';

/** 알고리즘 퍼센트 저장
 * @param {Array<PredictLottoPercent>} algorithmResults 알고리즘 각 볼에 대한 퍼센트
 */
const execSaveAlgorithmResult = async (algorithmResults) =>
  algorithmResults.map((algorithmResult) =>
    PredictLottoPercent.update(
      { percent: algorithmResult.percent },
      { where: { id: algorithmResult.id } }
    )
  );

export default execSaveAlgorithmResult;
