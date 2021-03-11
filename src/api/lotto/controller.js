import { AlgorithmKind, LottoRound } from '../../models';
import lottoCrawling from '../../util/lottoCrawling';
import lottoService from './service';

/** 로또 당첨결과에 대한 로직
 */
const appearLottoWin = async (req, res, next) => {
  try {
    const currentLotto = await LottoRound.getCurrentRound();

    const { balls, round } = await lottoCrawling(currentLotto.round);

    await lottoService.saveLottoWin(balls, round);

    await lottoService.savePredictLottoBallResult(balls, round);

    await lottoService.savePredictLottoRank(balls, round);

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

    const winBalls = await lottoService.getLottoBall(currentRound.round);

    const algorithmKindsWithPercents = await AlgorithmKind.findAllWithAlgorithmPercent();

    const algorithmResults = await Promise.all(
      lottoService.calAlgorithm(algorithmKindsWithPercents, winBalls)
    );

    await lottoService.saveAlgorithmResult(algorithmResults);

    await LottoRound.createNextRound();
    res.status(204).json();
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const pushIFTTTPredictLotto = async (req, res, next) => {
  try {
    await lottoService.pushIFTTTPredictLotto();
    res.status(204).json();
  } catch (error) {
    next(error);
  }
};

export default { appearLottoWin, calPredictLotto, pushIFTTTPredictLotto };
