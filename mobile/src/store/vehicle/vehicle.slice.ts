import { createSlice } from '@reduxjs/toolkit';
import { Tables } from '../../lib/supabase/types';
import { fetchVehicleBrands } from './vehicle.actions';

interface VehicleState {
  brands: Tables<'vehicle_brands'>[];
  loading: boolean;
  error: string | null;
}

const initialState: VehicleState = {
  brands: [],
  loading: false,
  error: null,
};

const vehicleSlice = createSlice({
  name: 'vehicle',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVehicleBrands.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchVehicleBrands.fulfilled, (state, action) => {
        state.loading = false;
        state.brands = action.payload as any;
      })
      .addCase(fetchVehicleBrands.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default vehicleSlice.reducer; 