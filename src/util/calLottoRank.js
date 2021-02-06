/** 1 ~ 7등까지 등수
 * @param {Array<boolean>} balls
 */
export const calLottoRank = (balls) => {
  const rank = 8 - balls.reduce((x, y) => x + y);

  if (rank === 2) {
    return balls[6] === true ? 1 : 2;
  }
  return rank > 5 ? 6 : rank;
};
