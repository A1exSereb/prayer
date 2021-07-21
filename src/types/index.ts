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

export type User = {
  token: string;
  name: string;
  email: string;
  id: number;
}

export type Column = {
  id: number;
  title: string;
  description: string | null;
  userId: number;
}

export type Prayer ={
  id: number;
  title: string;
  description: string | null;
  columnId: number;
  checked: boolean;
  commentsIds: Array<number | null>;
}

export type Comment ={
  id: number;
  body: string;
  created: string;
  prayerId: number | null;
  userId: number;
  userName: string | null;
}