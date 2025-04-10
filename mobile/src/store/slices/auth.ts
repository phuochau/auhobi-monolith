import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
  isAuthenticated: boolean;
  isOnboarded: boolean;
  user: { email: string } | null;
  selectedCar: Car | null;
}

const initialState: AuthState = {
  isAuthenticated: true,
  isOnboarded: false,
  user: null,
  selectedCar: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<{ email: string, password: string }>) => {
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
      state.selectedCar = null;
    },
    selectCar: (state, action: PayloadAction<Car>) => {
      state.selectedCar = action.payload;
    }
  },
});

export const { 
  signIn,
  completeOnboarding,
  signOut,
  selectCar
} = authSlice.actions;
export default authSlice.reducer;
