import express from 'express';
import lottoController from './controller';

const router = express();

/**
 * 매주 토요일 21:00 로또번호 추첨 후 LottoScore에 결과를 저장하는 API
 * 서버에 걸어놓을 예정
 */
router.get('/', lottoController.appearLottoWin);

/**
 * 매주 토요일 24:00 각 알고리즘들을 돌려 각 수의 확률을 계산하는 API
 * 서버에 걸어놓을 예정
 */
router.get('/calculator', lottoController.calPredictLotto);

/**
 * 매주 월요일 09:00 예상 로또번호를 IFTTT를 통해 각 사용자에게 보내주는 API
 * 서버에 걸어놓을 예정
 */
router.get('/predict/notify', lottoController.pushIFTTTPredictLotto);

export default router;
