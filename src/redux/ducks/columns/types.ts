export interface LoadColumn {
  id: number;
  title: string;
  description: string | null;
  userId: number;
}

export interface PostColumn {
  id: number;
  title: string;
  description: string;
  user: number;
}
