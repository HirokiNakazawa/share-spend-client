/**
 * 状態の初期化に関するカスタムフックの型定義
 */
export type ResetFunctions = {
  /**
   * モーダルの状態を初期化する関数
   *
   * @returns {void}
   */
  resetModalParams: () => void;

  /**
   * 認証情報の状態を初期化する関数
   *
   * @returns {void}
   */
  resetAuthenticationParams: () => void;

  /**
   * 種別登録に関する状態を初期化する関数
   *
   * @returns {void}
   */
  resetTypeRegistrationParams: () => void;

  /**
   * 支出登録に関する状態を初期化する関数
   *
   * @returns {void}
   */
  resetCostRegistrationParams: () => void;

  /**
   * 支出編集に関する状態を初期化する関数
   *
   * @returns {void}
   */
  resetCostUpdateParams: () => void;
};
