export type PostAuthResponse = {
  id: number;
  name: string;
};

export type GetTypeResponse = {
  id: number;
  type: string;
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
