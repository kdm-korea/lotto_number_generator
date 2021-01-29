import axios from 'axios';
import cheerio from 'cheerio';

/**
 * 로또 사이트의 당첨번호 크롤링
 * https://www.dhlottery.co.kr/gameResult.do?method=byWin
 *
 * @Response
 * @Array 로또회차[0], 로또 당첨번호[1 ~ 7]
 */
const crawling = async () => {
  const $data = [];
  const crawl = await axios.get(
    'https://www.dhlottery.co.kr/gameResult.do?method=byWin'
  );

  const $ = cheerio.load(crawl.data);

  $data.push($('#dwrNoList>option', '.contentsArticle')[0].children[0].data);

  $('.num.win>p>span', '.contentsArticle').each((index, item) => {
    $data.push(item.children[0].data);
  });

  $data.push($('.num.bonus>p>span', '.contentsArticle')[0].children[0].data);

  return $data;
};

export default crawling;
