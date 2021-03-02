import 'should';
import { suite, test } from 'mocha';
import { calLottoRank } from '../../util/calLottoRank';

suite('calculatorLottoRank test', () => {
  const winBalls = [1, 2, 3, 4, 5, 6, 7];
  let predictBalls = [];

  suite('if input nomal data', () => {
    test('should be 1st', () => {
      predictBalls = [1, 2, 3, 4, 5, 6];
      calLottoRank(predictBalls, winBalls).should.be.eql(1);
    });

    test('should be 2nd', () => {
      predictBalls = [1, 2, 3, 4, 5, 7];
      calLottoRank(predictBalls, winBalls).should.be.eql(2);
    });

    test('should be 3rd', () => {
      predictBalls = [1, 2, 3, 4, 5, 8];
      calLottoRank(predictBalls, winBalls).should.be.eql(3);
    });

    test('should be 4th', () => {
      predictBalls = [1, 2, 3, 4, 8, 9];
      calLottoRank(predictBalls, winBalls).should.be.eql(4);
    });

    test('should be 5th', () => {
      predictBalls = [1, 2, 3, 8, 9, 10];
      calLottoRank(predictBalls, winBalls).should.be.eql(5);
    });

    test('should be No rank', () => {
      predictBalls = [1, 2, 8, 9, 10, 11];
      calLottoRank(predictBalls, winBalls).should.be.eql(-1);
    });
  });
});
