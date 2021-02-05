import { LottoBall, LottoRound } from '../../../models';

/** 로또 당첨번호 저장
 * @Request
 * @param {Number} round 로또 회차
 * @param {Array<Number>} balls 로또 볼들 7개
 */
const lottoRound = async (round) =>
  LottoRound.findOne({
    where: {
      round,
    },
    attributes: ['id'],
    raw: true,
  });

/** 당첨번호 저장
 * @param {Number} round 현재 회차
 * @param {Array<Number>} balls 로또 볼
 */
const execSaveLottoWin = async (round, balls) => {
  const currentRound = await lottoRound(round);

  await LottoBall.bulkCreate(
    balls.map((ball, num) => ({
      num: num + 1,
      ball,
      isCorrect: true,
      lottoWin: currentRound.id,
    }))
  );
};

export default execSaveLottoWin;
