import ConflictError from '../../../component/exception/Conflict.Error';
import { User } from '../../../models';

const execExistUser = async (uuid) => {
  const exist = await User.countByUUID(uuid);
  if (exist === 1) {
    throw new ConflictError('이미 존재하는 계정입니다.');
  }
};

export default execExistUser;
