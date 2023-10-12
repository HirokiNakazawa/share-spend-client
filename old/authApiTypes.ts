import { AuthFormData, PostAuthResponse } from "@/types";

/**
 * ユーザー認証に関するAPI関数の型定義
 */
export type AuthApiFunctions = {
  /**
   * ユーザーを登録するAPI関数
   *
   * @param {AuthFormData} data - ユーザー登録情報
   * @returns {Promise<PostAuthResponse>} ユーザー登録の結果を表すPromise
   * @throws {Error} API呼び出し時のエラー
   */
  postRegister: (data: AuthFormData) => Promise<PostAuthResponse>;

  /**
   * ユーザーをログインするAPI関数
   *
   * @param {AuthFormData} data - ログイン情報
   * @returns {Promise<PostAuthResponse>} ログインの結果を表すPromise
   * @throws {Error} API呼び出し時のエラー
   */
  postLogin: (data: AuthFormData) => Promise<PostAuthResponse>;
};
