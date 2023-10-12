/**
 * ユーザー認証に関するカスタムフックの型定義
 */
export type AuthenticationFunctions = {
  /**
   * ユーザー登録を行う関数
   *
   * @returns {Promise<void>}
   */
  register: () => Promise<void>;

  /**
   * ユーザーログインを行う関数
   *
   * @returns {Promise<void>}
   */
  login: () => Promise<void>;
};
