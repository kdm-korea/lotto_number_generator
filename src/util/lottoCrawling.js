import axios from 'axios';
import NotFoundError from '../component/exception/NotFound.Error';

/**
 * 로또 사이트의 당첨번호 크롤링
 * https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=
 * @Request
 * @int 회차
 *
 * @Response
 * @Object {round:int, 1:int, 2:int, 3:int, 4:int, 5:int, 6:int, 7:int}
 */
const crawling = async (round) => {
  const crawl = await axios.get(
    `https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=${round}`
  );

  const { data } = crawl;

  if (data.returnValue === 'fail') {
    throw new NotFoundError('없는 당첨번호'); //= > 슬랙으로 메시징 처리 404
  }

  return {
    round: data.drwNo,
    1: data.drwtNo1,
    2: data.drwtNo2,
    3: data.drwtNo3,
    4: data.drwtNo4,
    5: data.drwtNo5,
    6: data.drwtNo6,
    7: data.bnusNo,
  };
};

export default crawling;
