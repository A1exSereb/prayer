import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {StoreSlice} from '../../../types';
import {SignIn, SignUp} from './types';
interface User {
  token: string;
  name: string;
  email: string;
  id: number;
}
interface AuthorizationState {
  user: User | null;
  authenticated: boolean;
  error: boolean;
  loading: boolean;
}

const initialState = {
  user: null,
  authenticated: false,
  error: false,
  loading: false,
} as AuthorizationState;

const authorizationSlice = createSlice({
  name: StoreSlice.Authorization,
  initialState,
  reducers: {
    signInLoading: state => {
      return {...state, loading: true};
    },
    signInSuccess: (state, action: PayloadAction<SignIn>) => {
      return {
        ...state,
        user: action.payload,
        authenticated: true,
        loading: false,
      };
    },
    signInError: state => {
      state.error = true;
    },
    signUpLoading: state => {
      return {...state, loading: true};
    },
    signUpSuccess: (state, action: PayloadAction<SignUp>) => {
      return {
        ...state,
        user: {
          token: action.payload.token,
          name: action.payload.name,
          email: action.payload.email,
          id: action.payload.id,
        },
        authenticated: true,
      };
    },
    signUpError: state => {
      state.error = true;
    },
  },
});

export default authorizationSlice.reducer;
export const {
  signInLoading,
  signInSuccess,
  signInError,
  signUpLoading,
  signUpSuccess,
  signUpError,
} = authorizationSlice.actions;
