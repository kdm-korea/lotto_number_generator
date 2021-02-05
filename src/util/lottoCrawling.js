import axios from 'axios';
import NotFoundError from '../component/exception/NotFound.Error';

/** 로또 사이트의 당첨번호 크롤링
 * @Request
 * @param {Number} round
 */
const crawling = async (round) => {
  const crawl = await axios.get(
    `https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=${round}`
  );

  const { data } = crawl;

  if (data.returnValue === 'fail') {
    throw new NotFoundError('없는 당첨번호'); //= > 슬랙으로 메시징 처리 404
  }
  const balls = [
    data.drwtNo1,
    data.drwtNo2,
    data.drwtNo3,
    data.drwtNo4,
    data.drwtNo5,
    data.drwtNo6,
    data.bnusNo,
  ];

  return {
    round: data.drwNo,
    balls,
  };
};

export default crawling;
