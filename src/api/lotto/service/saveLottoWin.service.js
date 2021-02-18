import { LottoBall } from '../../../models';

/** 당첨번호 저장
 * @Object
 * @param {Number} round 현재 회차
 * @param {Array<Number>} balls 로또 볼
 */
const execSaveLottoWin = async (lottoWin) => {
  await LottoBall.bulkCreate(
    lottoWin.balls.map((ball, num) => ({
      num: num + 1,
      ball,
      isCorrect: true,
      lottoWin: lottoWin.round,
    }))
  );
};

export default execSaveLottoWin;
