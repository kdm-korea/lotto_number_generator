import { PredictLottoPercent } from '../../models';

// 세타는 회차, 볼은 퍼센트
const filter = (current, lastest) => {
  return (
    current.percent +
    (lastest.percent - current.percent) *
      (current.theta ** current.theta /
        (current.theta ** current.theta + lastest.theta ** lastest.theta))
  );
};

/** 칼만필터
 * @param {Array<PredictLottoPercent>} kalmanPercents
 * @param {Array<number>} winBalls
 */
const execKalmanFilter = (kalmanPercents, winBalls) => {
  return kalmanPercents.map((predictPercent) => {
    const current = {
      percent:
        winBalls.find((ball) => ball === predictPercent.ball) === undefined
          ? 0
          : 1,
      theta: 0.5,
    };

    const lastest = {
      percent: predictPercent.percent,
      theta: 0.2,
    };

    // eslint-disable-next-line no-param-reassign
    predictPercent.percent = filter(current, lastest);
    return predictPercent;
  });
};

export default execKalmanFilter;
