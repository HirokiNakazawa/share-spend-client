export type UserState = {
  id: number | null;
  name: string;
  isLoggedIn: boolean;
};

export type ModalState = {
  isOpen: boolean;
  title: string;
  buttonText: string;
};

export type TypeState = {
  id: number | null;
  type: string;
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
