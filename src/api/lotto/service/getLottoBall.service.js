import _ from 'lodash';
import NotFoundError from '../../../component/exception/NotFound.Error';
import { LottoBall } from '../../../models';

/** 해당된 회차의 당첨번호를 배열로 반환
 * @param {number} round
 */
const execGetLottoBall = async (round) => {
  const balls = _.map(await LottoBall.findBallsByRound(round), 'ball');

  if (balls.length === 0) {
    throw new NotFoundError('해당하는 당첨번호가 없습니다.');
  }
  return balls;
};

export default execGetLottoBall;
