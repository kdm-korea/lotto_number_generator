import { LottoRound, UserLottoScore } from '../../../models';
import pushIFTTT from '../../../util/pushIFTTT';

/** 로또 결과를 IFTTT의 lottoresult 이벤트로 보내는 서비스
 * @param {string} uuid 유저 IFTTT 고유번호
 * @param {number} round 로또 회차
 * @param {number} rank 로또 순위
 */
const pushIFTTTLottoResult = (uuid, round, rank) => {
  pushIFTTT(uuid, 'lottoresult', round, rank);
};

/** 로또 결과를 사용자에게 IFTTT로 push를 보내는 서비스
 */
const execPushIFTTTLottoResult = async () => {
  const currentRound = await LottoRound.getCurrentRound();
  const userLottoScores = await UserLottoScore.findAllWithUserWithPredictLottoByLottoRoundId(
    currentRound.id
  );

  userLottoScores.forEach((userLottoScore) => {
    pushIFTTTLottoResult(
      userLottoScore.User.uuid,
      currentRound.round,
      userLottoScore.PredictLotto.ranking
    );
  });
};

export default execPushIFTTTLottoResult;
