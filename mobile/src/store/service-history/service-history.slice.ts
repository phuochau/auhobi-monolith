import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Tables } from '../../lib/supabase/types';
import { createServiceHistory } from './service-history.actions';
import { fetchServiceHistories } from './service-history.actions';

interface ServiceHistoryState {
  histories: Tables<'service_histories'>[];
  loading: boolean;
  error: string | null;
}

const initialState: ServiceHistoryState = {
  histories: [],
  loading: false,
  error: null,
};

const serviceHistorySlice = createSlice({
  name: 'serviceHistory',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
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