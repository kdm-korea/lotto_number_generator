import { before, suite, test } from 'mocha';
import 'should';
import lottoCrawling from '../../util/lottoCrawling';
import NotFoundError from '../../component/exception/NotFound.Error';

suite('Lotto crawling test', () => {
  let round = 1;
  const answer = {
    round: 1,
    balls: [10, 23, 29, 33, 37, 40, 16],
  };

  suite('if input normal data', () => {
    before(() => {
      round = 1;
    });

    test('should be return answer', (done) => {
      lottoCrawling(round)
        .then((result) => {
          result.should.be.deepEqual(answer);
          done();
        })
        .catch(done);
    });
  });

  suite('if no input data', () => {
    before(() => {
      round = undefined;
    });

    test('should be return NotFoundError', (done) => {
      lottoCrawling(round)
        .then(done)
        .catch((err) => {
          err.should.instanceof(NotFoundError);
          done();
        });
    });
  });

  suite('if input abnormal data', () => {
    before(() => {
      round = -1;
    });

    test('should be return NotFoundError', (done) => {
      lottoCrawling(round)
        .then(done)
        .catch((err) => {
          err.should.instanceof(NotFoundError);
          done();
        });
    });
  });
});
