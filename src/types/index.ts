export enum AppRoutes {
  SignIn = 'SignIn',
  SignUp = 'SignUp',
  MyDesk = 'MyDesk',
  ModalMyDesk = 'ModalMyDesk',
  PrayerTabs = 'PrayerTabs',
  MyPrayers = 'MyPrayers',
  Subscribed = 'Subscribed',
  PrayerDetails = 'PrayerDetails',
}

export enum StoreSlice {
  Authorization = 'authorization',
  Column = 'column',
  Prayer = 'prayer',
  Comment = 'comment',
}

// store

export type User = {
  token: string;
  name: string;
  email: string;
  id: number;
};

export type Column = {
  id: number;
  title: string;
  description: string | null;
  userId: number;
};

export type Prayer = {
  id: number;
  title: string;
  description: string | null;
  columnId: number;
  checked: boolean;
  commentsIds: Array<number | null>;
};

export type Comment = {
  id: number;
  body: string;
  created: string;
  prayerId: number | null;
  userId: number;
};

// auth types

export interface SignUpDto {
  name: string;
  password: string;
  email: string;
}
export interface SignInDto {
  password: string;
  email: string;
}

export interface SignUpResponse {
  email: string;
  name: string;
  password: string;
  token: string;
  columns: Array<{title: string; description: string | null; id: number}>;
  id: number;
}

export interface SignInResponse {
  id: number;
  email: string;
  name: string;
  token: string;
}

// column types

export interface CreateColumnDto {
  title: string;
  description: string;
}

export interface CreateColumnResponse {
  id: number;
  title: string;
  description: string | null;
  user: number;
}

// prayer types

export interface CreatePrayerDto {
  title: string;
  parentId: number;
}
export interface CreatePrayerResponse {
  id: number;
  title: string;
  description: string;
  checked: boolean;
  columnId: number;
  column: Column;
}

export interface UpdatePrayerDto {
  id: number;
  title: string;
  description: string | null;
  checked: boolean;
}

// comment types

export interface CreateCommentDto {
  parentId: number;
  title: string;
}

export interface CreateCommentResponse {
  body: string;
  card: Prayer;
  user: User;
  id: number;
  created: string;
  prayerId: number;
  userId: number;
}
