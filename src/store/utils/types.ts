export interface SignUp {
  name: string;
  password: string;
  email: string;
}
export interface SignIn {
  password: string;
  email: string;
}
export interface PostColumn {
  title: string;
  description: string;
}
export interface PostPrayer {
  title: string;
  parentId: number;
}

export interface SignUpPromise {
  email: string;
  name: string;
  password: string;
  token: string;
  columns: Array<{
    title: string;
    description: string | null;
    id: number;
  }>;
}

export interface SignInPromise {
  id: number;
  email: string;
  name: string;
  token: string;
}

export interface GetColumnPromise {
  id: number;
  title: string;
  description: string | null;
  userId: number;
}

export interface PostColumnPromise {
  title: string;
  description: string;
  user: number;
  id: number;
}

export interface GetPrayerPromise {
  id: number;
  title: string;
  description: string;
  checked: boolean;
  columnId: number;
  commentsId: Array<number>;
}

export interface PostPrayerPromise {
  id: number;
  title: string;
  description: string;
  checked: boolean;
  columnId: number;
  column: {
    id: number;
    title: string;
    description: string | null;
    userId: number;
  };
}
