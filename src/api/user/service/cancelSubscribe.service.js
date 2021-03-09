import NotFoundError from '../../../component/exception/NotFound.Error';
import User from '../../../models/User';

/** 로또번호 구독취소 서비스
 * @param {string} uuid IFTTT key
 */
const execCancelSubscribe = async (uuid) => {
  const changeRow = await User.update(
    { isSubscribe: false },
    { where: { uuid } }
  );

  if (changeRow === 0) {
    throw new NotFoundError('존재하지 않는 uuid입니다.');
  }
};
export default execCancelSubscribe;
