import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/root';

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

type AuthState = {
  loggedIn?: boolean;
  user: User | null;
  token: string;
  error?: string;
};

const initialState: AuthState = {
  loggedIn: false,
  user: null,
  token: '',
  error: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state, action: PayloadAction<AuthState>) {
      return { ...action.payload, loggedIn: true, error: '' };
    },
    loginFail(state, action: PayloadAction<string>) {
      return { ...initialState, error: action.payload };
    },
    logOut() {
      localStorage.removeItem('user');
      return { ...initialState };
    },
  },
});
// Export all of the actions:
export const { loginSuccess, loginFail, logOut } = authSlice.actions;

export const login = (email: string, password: string): AppThunk => async (
  dispatch
) => {
  // make api call
  let resp: any = await fetch('https://jsonplaceholder.typicode.com/users/1');
  resp = await resp.json();
  const user: User = {
    id: Math.random().toString(36).substr(2, 9),
    name: resp.name,
    email,
    password,
  };
  dispatch(loginSuccess({ user, token: 'testtokenstring' }));
};

// Create and export the selector:
export const selectAuthState = (state: RootState) => state.auth;

// It is a convention to export reducer as a default export:
export default authSlice.reducer;
