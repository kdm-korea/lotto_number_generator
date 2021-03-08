import { query } from 'express-validator';
import validator from '../../../middleware/validation.Handler';

const uuid = query('uuid')
  .exists({ checkFalsy: true })
  .withMessage('필수 입력사항입니다.')
  .isString()
  .withMessage('문자로 이루어져 있어야 합니다.');

const nickName = query('nickName')
  .exists({ checkFalsy: true })
  .withMessage('필수 입력사항입니다.')
  .isString()
  .withMessage('문자로 이루어져 있어야 합니다.');

export default {
  createAccount: validator([uuid, nickName]),
  cancelSubscribe: validator([uuid]),
};
