import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/auth.slice';
import vehicleReducer from './vehicle/vehicle.slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    vehicle: vehicleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
