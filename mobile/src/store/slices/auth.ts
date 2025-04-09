import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isAuthenticated: boolean;
  isOnboarded: boolean;
  user: { id: string; email: string } | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  isOnboarded: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<{ id: string; email: string }>) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    completeOnboarding: (state) => {
      state.isOnboarded = true;
    },
    signOut: (state) => {
      state.isAuthenticated = false;
      state.isOnboarded = false;
      state.user = null;
    },
  },
});

export const { signIn, completeOnboarding, signOut } = authSlice.actions;
export default authSlice.reducer;
