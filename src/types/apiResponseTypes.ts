export type PostAuthResponse = {
  id: number;
  name: string;
};

export type GetTypeListResponse = {
  id: number;
  type: string;
};

export type GetUserCostListResponse = {
  id: number;
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

export type PostTypeResponse = {
  id: number;
  type: string;
};

export type PostCostResponse = {
  name: string;
  cost: number;
};
