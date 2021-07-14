export interface LoadPrayer {
  id: number;
  title: string;
  description: string | null;
  columnId: number;
  checked: boolean;
  commentsIds: Array<number | null>;
}

export interface PostPrayer {
  id: number;
  title: string;
  description: string;
  checked: boolean;
  columnId: number;
}
