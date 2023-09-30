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
