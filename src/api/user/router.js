import express from 'express';
import userController from './controller';
import validator from './validation/user.schema';
const router = express();

/**
 * 유저의 정보를 저장하는 API
 * 이건 API를 만들까 말까 고민중
 * 내가 직접 넣는게 더 좋을수도 이건 일단 보류
 * validation 필요
 */
router.post('/', validator.createAccount, userController.createAccount);


export default router;