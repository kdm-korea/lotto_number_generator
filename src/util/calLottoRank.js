import _ from 'lodash';

/** 1 ~ 6등까지 등수를 구하는 함수
 * @param {Array<number>} predictBalls 예상 로또 볼들
 * @param {Array<number>} winBalls 당첨된 로또 볼들
 */
export const calLottoRank = (predictBalls, winBalls) => {
  const rank = _.union(predictBalls, winBalls).length - 5;

  if (rank === 2) {
    return predictBalls[predictBalls.length - 1] !==
      winBalls[winBalls.length - 1]
      ? 1
      : 2;
  }

  return rank > 5 ? -1 : rank;
};
