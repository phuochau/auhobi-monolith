import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Tables } from '../../lib/supabase/types';
import { createServiceHistory, fetchServiceHistories, fetchServiceTypes } from './service-history.actions';

interface ServiceHistoryState {
  histories: Tables<'service_histories'>[];
  serviceTypes: Tables<'ref_service_types'>[];
  loading: boolean;
  error: string | null;
}

const initialState: ServiceHistoryState = {
  histories: [],
  serviceTypes: [],
  loading: false,
  error: null,
};

const serviceHistorySlice = createSlice({
  name: 'serviceHistory',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Fetch Service Types
    builder
      .addCase(fetchServiceTypes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchServiceTypes.fulfilled, (state, action) => {
        state.loading = false;
        state.serviceTypes = action.payload;
      })
      .addCase(fetchServiceTypes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

    // Fetch Service Histories
    builder
      .addCase(fetchServiceHistories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchServiceHistories.fulfilled, (state, action) => {
        state.loading = false;
        state.histories = action.payload;
      })
      .addCase(fetchServiceHistories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

    // Create Service History
    builder
      .addCase(createServiceHistory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createServiceHistory.fulfilled, (state, action) => {
        state.loading = false;
        state.histories = [action.payload, ...state.histories];
      })
      .addCase(createServiceHistory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default serviceHistorySlice.reducer; 