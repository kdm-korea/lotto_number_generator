import _ from 'lodash';
import { LottoBall, LottoRound, UserLottoScore } from '../../../models';
import pushIFTTT from '../../../util/pushIFTTT';

/** 로또 예상번호를 IFTTT의 predictLotto url로 보내는 서비스
 * @param {string} uuid 사용자 IFTTT UUID
 * @param {string} round 로또 회차
 * @param {array<number>} predictLotto 에상 로또번호
 */
const sendIFTTTPredictLotto = (uuid, round, predictLotto) => {
  pushIFTTT(uuid, 'lottopredict', round, predictLotto);
};

/** 예상 로또번호를 사용자에게 IFTTT으로 push를 보내는 서비스
 */
const execPushIFTTTPredictLotto = async () => {
  const currentLottoRound = await LottoRound.getCurrentRound();
  const userLottoScores = await UserLottoScore.findAllWithUserWithPredictLottoByLottoRoundId(
    currentLottoRound.id
  );
  const lottoballs = await LottoBall.findAllByPreidctLottoId(
    _.map(userLottoScores, 'PredictLotto.id')
  );

  userLottoScores.forEach((userLottoScore) => {
    sendIFTTTPredictLotto(
      userLottoScore.User.uuid,
      currentLottoRound.round,
      _.chain(lottoballs)
        .filter({ PredictLottoId: userLottoScore.PredictLotto.id })
        .map('ball')
        .value()
    );
  });
};

export default execPushIFTTTPredictLotto;
