export const loadColumnRequest = () => ({
  type: 'LOAD_COLUMN_REQUEST',
});

export const postColumnRequest = (payload: {
  title: string;
  description: string;
}) => ({
  type: 'POST_COLUMN_REQUEST',
  payload,
});
