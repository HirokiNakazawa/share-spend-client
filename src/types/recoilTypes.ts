export type ModalState = {
  isOpen: boolean;
  title: string;
  buttonText: string;
};

export type Type = {
  id: number | null;
  type: string;
};

export type monthlyCostByType = {
  type_id: number;
  type_name: string;
  total_cost: number;
};
