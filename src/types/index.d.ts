/**
 * Recoilの状態型定義
 */
export type UserState = {
  id: number;
  name: string;
  isLoggedIn: boolean;
};

export type ModalState = {
  isOpen: boolean;
  title: string;
  buttonText: string;
  width: number;
};

export type TypeState = {
  id: number | null;
  type: string;
};

export type CostState = {
  id: number;
  type_id: number;
  name: string;
  cost: number;
  is_half_billing: boolean;
  is_full_billing: boolean;
  end_date?: string;
};

export type MonthlyCostByTypeState = {
  type_id: number;
  type_name: string;
  total_cost: number;
};

export type SelectDateState = {
  year: number;
  month: number;
};

export type ClaimState = {
  sender: string;
  receiver: string;
  claim: number;
};

/**
 * フォームデータ型定義
 */
export type AuthFormData = {
  name: string;
  password: string;
};

export type CreateTypeFormData = {
  type: string;
};

export type CreateCostFormData = {
  user_id: number | null;
  type_id: number | null | undefined;
  name: string;
  cost: number | null;
  is_half_billing: boolean;
  is_full_billing: boolean;
};

export type UpdateCostFormData = {
  user_id: number | null;
  type_id: number | null | undefined;
  name: string;
  cost: number | null;
  is_half_billing: boolean;
  is_full_billing: boolean;
};

export type CreateFixedCostFormData = {
  user_id: number | null;
  type_id: number | null | undefined;
  name: string;
  cost: number | null;
  is_half_billing: boolean;
  is_full_billing: boolean;
  end_date: string | null;
};

export type UpdateFixedCostFormData = {
  user_id: number | null;
  type_id: number | null | undefined;
  name: string;
  cost: number | null;
  is_half_billing: boolean;
  is_full_billing: boolean;
  end_date: string | null;
};

/**
 * APIレスポンス型定義
 */
export type PostAuthResponse = {
  id: number;
  name: string;
};

export type GetTypeListResponse = {
  [key: string]: string;
};

export type GetUserCostListResponse = {
  id: number;
  type_id: number;
  name: string;
  cost: number;
  is_half_billing: boolean;
  is_full_billing: boolean;
};

export type GetUserFixedCostListResponse = {
  id: number;
  cost_id: number;
  end_date: string;
  user_id: number;
  type_id: number;
  name: string;
  cost: number;
  is_half_billing: boolean;
  is_full_billing: boolean;
};

export type GetMonthlyCostByTypeResponse = {
  type_id: number;
  type_name: string;
  total_cost: number;
};

export type GetMonthlyBillingAmountResponse =
  | {
      sender: string;
      receiver: string;
      claim: number;
      message?: never;
    }
  | {
      message: string;
    };

export type PostTypeResponse = {
  id: number;
  type: string;
};

export type PostCostResponse = {
  name: string;
  cost: number;
};

export type PostFixedCostResponse = {
  name: string;
  cost: number;
  end_date: Date | null;
};

/**
 * 汎用API関数の型定義
 */
export declare type ApiFunctions = {
  getTypeList: () => Promise<GetTypeListResponse>;
  getUserCostList: (id: number, selectDate: SelectDateState) => Promise<GetUserCostListResponse[]>;
  getUserFixedCostList: (id: number) => Promise<GetUserFixedCostListResponse[]>;
  getMonthlyCostByType: (selectDate: SelectDateState) => Promise<GetMonthlyCostByTypeResponse[]>;
  getMonthlyBillingAmount: (selectDate: SelectDateState) => Promise<GetMonthlyBillingAmountResponse>;
};

/**
 * コンバートカスタムフックの型定義
 */
export declare type ConvertFunctions = {
  convertToClaimState: (response: GetMonthlyBillingAmountResponse) => ClaimState;
};

/**
 * 状態の初期化に関するカスタムフックの型定義
 */
export declare type ResetFunctions = {
  resetModalParams: () => void;
  resetAuthenticationParams: () => void;
  resetTypeRegistrationParams: () => void;
  resetCostRegistrationParams: () => void;
  resetCostUpdateParams: () => void;
  resetFixedCostParams: () => void;
};

/**
 * 集計に関するカスタムフックの型定義
 */
export declare type SummaryFunctions = {
  getMonthlyTotalCost: () => number;
  getMonthlyPredictCost: () => number;
};

/**
 * 状態の更新に関するカスタムフックの型定義
 */
export declare type UpdateFunctions = {
  updateTypeList: () => Promise<void>;
  updateUserCostList: (id: number, selectDate: SelectDateState) => Promise<void>;
  updateUserFixedCostList: (id: number) => Promise<void>;
  updateMonthlyCostByType: (selectDate: SelectDateState) => Promise<void>;
  updateMonthlyClaim: (selectDate: SelectDateState) => Promise<void>;
};

/**
 * ユーザー認証に関するAPI関数の型定義
 */
export declare type AuthApiFunctions = {
  postRegister: (data: AuthFormData) => Promise<PostAuthResponse>;
  postLogin: (data: AuthFormData) => Promise<PostAuthResponse>;
};

/**
 * ユーザー認証に関するカスタムフックの型定義
 */
export declare type AuthenticationFunctions = {
  register: () => Promise<void>;
  login: () => Promise<void>;
};

/**
 * 支出編集に関するAPI関数の型定義。
 */
export declare type UpdateCostApiFunctions = {
  putUpdateCost: (data: UpdateCostFormData, id: number) => Promise<PostCostResponse>;
};

/**
 * 支出編集に関するカスタムフックの型定義
 */
export declare type UpdateCostFunctions = {
  updateCost: () => Promise<void>;
};

/**
 * 種別登録に関するAPI関数の型定義
 */
export declare type CreateTypeApiFunctions = {
  postCreateType: (data: CreateTypeFormData) => Promise<PostTypeResponse>;
};

/**
 * 種別登録に関するカスタムフックの型定義
 */
export declare type CreateTypeFunctions = {
  createType: () => Promise<void>;
};

/**
 * 支出登録に関するAPI関数の型定義
 */
export declare type CreateCostApiFunctions = {
  postCreateCost: (data: CreateCostFormData) => Promise<PostCostResponse>;
};

/**
 * 支出登録に関するカスタムフックの型定義
 */
export declare type CreateCostFunctions = {
  createCost: () => Promise<void>;
};

/**
 * 固定費登録に関するAPI関数の型定義
 */
export declare type FixedCostApiFunctions = {
  postCreateFixedCost: (data: CreateFixedCostFormData) => Promise<PostFixedCostResponse>;
  postUpdateFixedCost: (data: UpdateCostFormData, id: number) => Promise<PostFixedCostResponse>;
};

/**
 * 固定費登録に関するカスタムフックの型定義
 */
export declare type UseFixedCostFunctions = {
  createFixedCost: () => Promise<void>;
  updateFixedCost: () => Promise<void>;
};
