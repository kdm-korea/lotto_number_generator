import lottoCrawling from '../../../util/lottoCrawling';
import {
  addLottoRound,
  currentRound,
  saveLottoResult,
  saveLottoWin,
} from '../service';

/** 로또 당첨결과에 대한 로직
 */
const appearLottoWin = async (req, res, next) => {
  try {
    const round = await currentRound();

    const lottoWin = await lottoCrawling(round);

    await saveLottoWin(lottoWin.round, lottoWin.balls);

    await saveLottoResult(lottoWin.round, lottoWin.balls);

    await addLottoRound(round);

    res.status(204).json();
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export default { appearLottoWin };
