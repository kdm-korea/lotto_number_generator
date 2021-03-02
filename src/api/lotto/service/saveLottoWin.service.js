import { LottoBall } from '../../../models';

/** 당첨번호 저장
 * @param {Array<Number>} balls 로또 볼
 * @param {Number} round 현재 회차
 */
const execSaveLottoWin = async (balls, round) => {
  await LottoBall.bulkCreate(
    balls.map((ball, num) => ({
      num: num + 1,
      ball,
      isCorrect: true,
      lottoWin: round,
    }))
  );
};

export default execSaveLottoWin;
