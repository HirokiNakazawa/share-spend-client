export type ModalState = {
  isOpen: boolean;
  title: string;
  buttonText: string;
};

export type UserState = {
  id: number | null;
  name: string;
  isLoggedIn: boolean;
};

export type AuthFormData = {
  name: string;
  password: string;
};

export type PostAuthResponse = {
  id: number;
  name: string;
};
