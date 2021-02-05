import { LottoRound } from '../../../models';

/** 다음회차의 당첨번호 추가
 *
 * @param {Number} round 현재 회차번호
 */
const addLottoRound = async (round) => LottoRound.create({ round: round + 1 });

export default addLottoRound;
