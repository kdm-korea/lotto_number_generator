import { LottoRound } from '../../../models';

/**
 * 현재 로또 회차
 */
const execCurentRound = async () => LottoRound.max('round');

export default execCurentRound;
