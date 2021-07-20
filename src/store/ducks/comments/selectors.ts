import {RootState} from '../../rootReducer';

export const getComments = (state: RootState) => {
  return state.comment.comment;
};

export const getCommentsById = (id: number) => (state: RootState) => {
  return state.comment.comment.filter(item => item.prayerId === id);
};

export const getCurrentUserCommentsCount =
  (id: number) => (state: RootState) => {
    const userId = state.authorization.user?.id;
    return state.comment.comment
      .filter(item => item.prayerId === id)
      .filter(item => item.userId === userId).length;
  };
