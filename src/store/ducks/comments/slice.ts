import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {StoreSlice} from '../../../types/StoreSlice';
import columnSlice from '../columns';
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
  },
});

export default commentSlice.reducer;
export const {getCommentSuccess, getCommentError} = commentSlice.actions;
