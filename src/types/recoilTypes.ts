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
