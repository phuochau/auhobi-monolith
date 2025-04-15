import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/auth.slice';
import vehicleReducer from './vehicle/vehicle.slice';
import serviceHistoryReducer from './service-history/service-history.slice';
import appReducer from './app/app.slicer';

export const store = configureStore({
  reducer: {
    app: appReducer,
    auth: authReducer,
    vehicle: vehicleReducer,
    serviceHistory: serviceHistoryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
