import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface AuthorizationState {
  user: Object | null;
  authenticated: boolean;
}

const initialState = {
  user: null,
  authenticated: true,
} as AuthorizationState;

const authorizationSlice = createSlice({
  name: 'authorization',
  initialState,
  reducers: {},
});

export default authorizationSlice.reducer;
export const {singIn, singUp} = authorizationSlice.actions;
