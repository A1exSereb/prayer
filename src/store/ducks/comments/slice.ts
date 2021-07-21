import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CreateCommentResponse} from '../../../types/types';
import {Comment, StoreSlice} from '../../../types';

interface CommentState {
  comment: Array<Comment>;
  error: boolean;
}

const initialState = {
  loading: true,
  comment: [],
  error: false,
} as CommentState;

const commentSlice = createSlice({
  name: StoreSlice.Comment,
  initialState,
  reducers: {
    getCommentSuccess: (state, action: PayloadAction<Array<Comment>>) => {
      state.comment = action.payload;
    },
    getCommentError: state => {
      state.error = true;
    },
    createCommentSuccess: (
      state,
      action: PayloadAction<CreateCommentResponse>,
    ) => {
      state.comment.push({
        id: action.payload.id,
        body: action.payload.body,
        created: action.payload.created,
        prayerId: action.payload.prayerId,
        userId: action.payload.userId,
      });
    },
    createCommentError: state => {
      state.error = true;
    },
  },
});

export default commentSlice.reducer;
export const {
  getCommentSuccess,
  getCommentError,
  createCommentSuccess,
  createCommentError,
} = commentSlice.actions;
