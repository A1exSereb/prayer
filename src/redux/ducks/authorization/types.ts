export interface SignUp {
  email: string;
  name: string;
  password: string;
  token: string;
  columns: Array<{title: string; description: string | null; id: number}>;
  id: number;
};

export interface SignIn {
  id: number;
  email: string;
  name: string;
  token: string;
};