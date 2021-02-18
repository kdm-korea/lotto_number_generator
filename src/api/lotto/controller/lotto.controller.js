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

    const lottoWin = await lottoCrawling(currentLotto.round);

    await saveLottoWin(lottoWin);

    await savePredictLottoBallResult(lottoWin);

    await savePredictLottoRank(lottoWin);

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
