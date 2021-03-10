import userSerivce from './service';

/** 계정 생성
 */
const createAccount = async (req, res, next) => {
  const { uuid, nickName } = req.query;

  try {
    await userSerivce.existUser(uuid);
    const user = await userSerivce.saveUser(uuid, nickName);
    res.status(204).json({ user });
  } catch (error) {
    next(error);
  }
};

/** 구독 취소
 */

const cancelSubscribe = async (req, res, next) => {
  const { uuid } = req.params;
  userSerivce
    .cancelSubscribe(uuid)
    .then(() => res.status(204).json())
    .catch((error) => next(error));
};

export default { createAccount, cancelSubscribe };
