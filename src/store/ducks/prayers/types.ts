export interface LoadPrayer {
  id: number;
  title: string;
  description: string | null;
  columnId: number;
  checked: boolean;
  commentsIds: Array<number | null>;
}

export interface PostPrayer {
  title: string;
  parentId: number;
  description: string;
  checked: boolean;
  id: number;
  columnId: number;
}

export interface ChangePrayerRequest {
  id: number;
  title: string;
  description: string | null;
  checked: boolean;
}

export interface ChangePrayer {
  title: string;
  commentsIds: Array<number>;
  description: string | null;
  checked: boolean;
  id: number;
  columnId: number;
}
