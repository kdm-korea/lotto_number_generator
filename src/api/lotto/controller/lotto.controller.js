import { LottoRound } from '../../../models';
import lottoCrawling from '../../../util/lottoCrawling';
import {
  savePredictLottoBallResult,
  savePredictLottoRank,
  saveLottoWin,
} from '../service';

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

    await saveLottoResult(lottoWin.round, lottoWin.balls);

    await addLottoRound(round);

    res.status(204).json();
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export default { appearLottoWin };
