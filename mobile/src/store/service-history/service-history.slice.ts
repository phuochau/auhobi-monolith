import { createSlice } from '@reduxjs/toolkit';
import { Tables } from '../../lib/supabase/types';
import { createServiceHistory, fetchServiceHistories, fetchServiceTypes, ServiceHistoryWithServiceTypeType } from './service-history.actions';

interface ServiceHistoryState {
  histories: ServiceHistoryWithServiceTypeType[];
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
        state.histories = (action.payload as any) as ServiceHistoryWithServiceTypeType[];
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
        state.histories = [(action.payload as any) as ServiceHistoryWithServiceTypeType, ...state.histories];
      })
      .addCase(createServiceHistory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default serviceHistorySlice.reducer; 