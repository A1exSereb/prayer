import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {SignIn, SignUp} from './types';

interface AuthorizationState {
  user: Object | null;
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
  name: 'authorization',
  initialState,
  reducers: {
    signInRequest: (state,) => {
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
    signUpRequest: state => {
      return state;
    },
    signUpSuccess: (state, action: PayloadAction<SignUp>) => {
      (state.user = action.payload), (state.authenticated = true);
    },
    signUpError: state => {
      state.error = true;
    },
  },
});

export default authorizationSlice.reducer;
export const {
  signInRequest,
  signInSuccess,
  signInError,
  signUpRequest,
  signUpSuccess,
  signUpError,
} = authorizationSlice.actions;
