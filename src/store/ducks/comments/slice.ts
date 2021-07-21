import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {PostCommentResponse} from '../../../store/utils/types';
import {StoreSlice} from '../../../types';
export interface Comment {
  id: number;
  body: string;
  created: string;
  prayerId: number | null;
  userId: number;
  userName: string | null;
}
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
      return {
        ...state,
        comment: action.payload,
      };
    },
    getCommentError: state => {
      return {
        ...state,
        error: true,
      };
    },
    postCommentSuccess: (state, action: PayloadAction<PostCommentResponse>) => {
      return {
        ...state,
        comment: state.comment.concat({
          id: action.payload.id,
          body: action.payload.body,
          created: action.payload.created,
          prayerId: action.payload.prayerId,
          userId: action.payload.userId,
          userName: action.payload.user.name,
        }),
      };
    },
    postCommentError: state => {
      return {
        ...state,
        error: true,
      };
    },
  },
});

export default commentSlice.reducer;
export const {
  getCommentSuccess,
  getCommentError,
  postCommentSuccess,
  postCommentError,
} = commentSlice.actions;
