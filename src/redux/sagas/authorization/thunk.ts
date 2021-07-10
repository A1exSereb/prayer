export const signInRequest = (payload: {email: string; password: string}) => ({
  type: 'SIGN_IN_REQUEST',
  payload,
});

export const signUpRequest = (payload: {
  email: string;
  password: string;
  name: string;
}) => ({
  type: 'SIGN_UP_REQUEST',
  payload,
});
