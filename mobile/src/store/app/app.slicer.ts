import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppState {
  dateFormat: string;
  dateTimeFormat: string;
  dateMonthFormat: string;
  monthYearFormat: string;
  dateMonthYearFormat: string;
  timeFormat: string;
  mileageUnit: string;
  currency: string;
  naText: string;
}

const initialState: AppState = {
  dateFormat: 'DD/MM/YYYY',
  dateTimeFormat: 'DD/MM/YYYY HH:mm',
  dateMonthFormat: 'd MMM',
  monthYearFormat: 'MMMM YYYY',
  dateMonthYearFormat: 'd MMMM YYYY',
  timeFormat: 'HH:mm',
  mileageUnit: 'km',
  currency: 'VND',
  naText: 'N/A',
};

const appSlicer = createSlice({
  name: 'app',
  initialState,
  reducers: {}
});

export default appSlicer.reducer; 