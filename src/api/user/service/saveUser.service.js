import User from '../../../models/User';

/** 유저 생성 서비스
 * @param {string} uuid IFTTT 계정 번호
 * @param {string} nickName 사용자명
 */
const execSaveUser = async (uuid, nickName) => User.create({ uuid, nickName });

export default execSaveUser;
