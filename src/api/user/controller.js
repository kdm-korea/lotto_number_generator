import { saveUser } from './service';

/** 계정 생성
 */
const createAccount = async (req, res, next) => {
  const { uuid, nickName } = req.params;

  saveUser(uuid, nickName)
    .then(() => res.status(204).json())
    .catch((error) => next(error));
};

export default { createAccount };
