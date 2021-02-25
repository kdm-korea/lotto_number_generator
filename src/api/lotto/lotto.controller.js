import { AlgorithmKind, LottoRound } from '../../models';
import lottoCrawling from '../../util/lottoCrawling';
import {
  saveAlgorithmResult,
  saveLottoWin,
  savePredictLottoBallResult,
  savePredictLottoRank,
  getLottoBall,
  calAlgorithm,
} from './service';

/** 로또 당첨결과에 대한 로직
 */
const appearLottoWin = async (req, res, next) => {
  try {
    const currentLotto = await LottoRound.getCurrentRound();

    const { balls, round } = await lottoCrawling(currentLotto.round);

    await saveLottoWin(balls, round);

    await savePredictLottoBallResult(balls, round);

    await savePredictLottoRank(balls, round);

    res.status(204).json();
  } catch (error) {
    next(error);
  }
};

/** 알고리즘을 계산하는 로직
 */
const calPredictLotto = async (req, res, next) => {
  try {
    const currentRound = await LottoRound.getCurrentRound();

    const winBalls = await getLottoBall(currentRound.round);

    const algorithmKindsWithPercents = await AlgorithmKind.findAllWithAlgorithmPercent();

    const algorithmResults = await Promise.all(
      calAlgorithm(algorithmKindsWithPercents, winBalls)
    );

    await saveAlgorithmResult(algorithmResults);

    await LottoRound.createNextRound();
    res.status(204).json();
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export default { appearLottoWin, calPredictLotto };
