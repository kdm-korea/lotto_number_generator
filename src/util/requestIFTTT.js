import axios from 'axios';

/** IFTTT로 데이터 보내주는 함수
 * https://ifttt.com/maker_webhooks documnet 참조
 * @param {string} uuid IFTTT key
 * @param {string} event URL에 들어갈 이벤트명
 * @param {*} value1 data에 들어갈 인자값
 * @param {*} value2 data에 들어갈 인자값
 * @param {*} value3 data에 들어갈 인자값
 */
const requestIFTTT = (uuid, event, value1 = '', value2 = '', value3 = '') => {
  axios.post(
    `https://maker.ifttt.com/trigger/${event}/with/key/${uuid}`,
    {
      value1,
      value2,
      value3,
    },
    { headers: { 'Content-Type': 'application/json' } }
  );
};

export default requestIFTTT;
