import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '@supabase/supabase-js';
import _ from 'lodash'
import { Tables } from '../../lib/supabase/types';
import { initAuth, signIn, signOut, fetchUserVehicles, fetchUserProfile } from './auth.actions'

interface AuthState {
  initializing: boolean;
  user: User | null;
  profile: Tables<'profiles'> | null;
  vehicles: Tables<'user_vehicles'>[] | [];
  selectedVehicle : Tables<'user_vehicles'> | null;
  loading: boolean;
  error: string | null;
}

const defaultState = {
  initializing: false,
  profile: null,
  user: null,
  vehicles: [],
  selectedVehicle: null,
  loading: false,
  error: null
}

const initialState: AuthState = _.cloneDeep(defaultState)

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    selectVehicle: (state, action: PayloadAction<Tables<'user_vehicles'>>) => {
      state.selectedVehicle = action.payload;
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
      })
      .addCase(signIn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

    // Sign Out
    builder
      .addCase(signOut.fulfilled, (state) => {
        Object.assign(state, defaultState)
      })
      .addCase(signOut.rejected, (state, action) => {
        state.error = action.payload as string;
      });

    // Fetch User Profile
    builder
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.profile = action.payload;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.error = action.payload as string;
      });

    // Fetch User Vehicles
    builder
      .addCase(fetchUserVehicles.fulfilled, (state, action) => {
        state.vehicles = action.payload;
        if (state.selectedVehicle === null) {
          state.selectedVehicle = state.vehicles[0] || null;
        }
      })
      .addCase(fetchUserVehicles.rejected, (state, action) => {
        state.error = action.payload as string;
      });
  },
});

export const {
  selectVehicle
} = authSlice.actions;
export default authSlice.reducer;
