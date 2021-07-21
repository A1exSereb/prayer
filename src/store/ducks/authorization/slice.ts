import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {SignInResponse, SignUpResponse, StoreSlice, User} from '../../../types';

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
      state.loading = true;
    },
    signInSuccess: (state, action: PayloadAction<SignInResponse>) => {
      state.user = action.payload;
      state.authenticated = true;
      state.loading = false;
    },
    signInError: state => {
      state.error = true;
    },
    signUpLoading: state => {
      state.loading = true;
    },
    signUpSuccess: (state, action: PayloadAction<SignUpResponse>) => {
      state.user = {
        token: action.payload.token,
        name: action.payload.name,
        email: action.payload.email,
        id: action.payload.id,};
        state.authenticated = true;
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
