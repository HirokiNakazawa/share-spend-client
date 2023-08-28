export type PostAuthResponse = {
  id: number;
  name: string;
};

export type GetTypeResponse = {
  id: number;
  type: string;
};

export type GetMonthlyCostByTypeResponse = {
  id: number;
  totalCost: number;
};

export type PostTypeResponse = {
  id: number;
  type: string;
};

export type PostCostResponse = {
  name: string;
  cost: number;
};
