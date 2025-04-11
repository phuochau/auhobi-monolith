import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '@supabase/supabase-js';
import _ from 'lodash'
import { Tables } from '../../lib/supabase/types';
import { initAuth, signIn, signOut } from './auth.actions'

interface Car {
  nickname: string;
  brand: string;
  model: string;
  year: string;
  licensePlate: string;
  mileage: string;
  photo?: string | null;
}

interface AuthState {
  initializing: boolean;
  isAuthenticated: boolean;
  isOnboarded: boolean;
  user: User | null;
  profile: Tables<'profiles'> | null;
  selectedCar: Car | null;
  loading: boolean;
  error: string | null;
}

const defaultState = {
  initializing: false,
  isAuthenticated: true,
  isOnboarded: true,
  profile: null,
  user: null,
  selectedCar: null,
  loading: false,
  error: null
}

const initialState: AuthState = _.cloneDeep(defaultState)

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    completeOnboarding: (state) => {
      state.isOnboarded = true;
    },
    selectCar: (state, action: PayloadAction<Car>) => {
      state.selectedCar = action.payload;
    }
  },
  extraReducers: (builder) => {
    // Init Auth
    builder
      .addCase(initAuth.pending, (state) => {
        state.initializing = true;
        state.error = null;
      })
      .addCase(initAuth.fulfilled, (state, action) => {
        state.initializing = false;
        state.user = action.payload?.user || null;
        state.profile = action.payload?.profile || null;
      })
      .addCase(initAuth.rejected, (state, action) => {
        state.initializing = false;
        state.error = action.payload as string;
      });

    // Sign In
    builder
      .addCase(signIn.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.profile = action.payload.profile;
        state.isAuthenticated = true;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

    // Sign Out
    builder
      .addCase(signOut.fulfilled, (state) => {
        state = defaultState
      })
      .addCase(signOut.rejected, (state, action) => {
        state.error = action.payload as string;
      });
  },
});

export const { 
  completeOnboarding,
  selectCar
} = authSlice.actions;
export default authSlice.reducer;
