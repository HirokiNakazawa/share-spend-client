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
