import _ from 'lodash';
import { PredictLotto } from '../../../models';
import { calLottoRank } from '../../../util/calLottoRank';

/**
 * 데이터 중 로또볼과 id만 필터링하여 순위 계산
 * @param {Array<PredictLotto>} predictLottos 예측한 로또
 * @param {Array<number>} winBalls 당첨 볼들
 */
const getPredicLottosRank = async (predictLottos, winBalls) =>
  predictLottos.map((predictLotto) => ({
    id: predictLotto.id,
    ranking: calLottoRank(_.map(predictLotto.LottoBalls, 'ball'), winBalls),
  }));

/** 로또 순위 저장
 * @param {Object{round: number, balls: Array<number>}} lottoWin 당첨된 로또
 */
const execSavePredictLottoRank = async (lottoWin) => {
  const predictLottos = await PredictLotto.findPredictBallByRound(
    lottoWin.round
  );

  const predictLottosRank = await getPredicLottosRank(
    predictLottos,
    lottoWin.balls
  );

  predictLottosRank.map(async (predictLottoRank) =>
    PredictLotto.update(
      { ranking: predictLottoRank.ranking },
      {
        where: {
          id: predictLottoRank.id,
        },
      }
    )
  );
};

export default execSavePredictLottoRank;
