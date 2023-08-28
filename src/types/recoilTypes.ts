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
  id: number | null;
  totalCost: number | null;
};
