export const getColumnRequest = () => ({
  type: 'GET_COLUMN_REQUEST',
});

export const postColumnRequest = (payload: {
  title: string;
  description: string;
}) => ({
  type: 'POST_COLUMN_REQUEST',
  payload,
});
