import { createAsyncThunk } from "@reduxjs/toolkit";
import { Supabase } from "../../lib/supabase/client";


export const fetchServiceHistories = createAsyncThunk(
    'serviceHistory/fetchHistories',
    async (vehicleId: number, thunkAPI) => {
      try {
        const { data, error } = await Supabase.client
          .from('service_histories')
          .select('*, service_history_bills(*)')
          .eq('user_vehicle_id', vehicleId)
          .order('date', { ascending: false });
  
        if (error) {
          return thunkAPI.rejectWithValue(error.message);
        }
  
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue('Failed to fetch service histories');
      }
    }
  );
  
  export const createServiceHistory = createAsyncThunk(
    'serviceHistory/createHistory',
    async (
      {
        serviceTypeId,
        serviceDetails,
        provider,
        cost,
        mileage,
        notes,
        date,
        media,
        vehicleId,
      }: {
        serviceTypeId: number;
        serviceDetails: string;
        provider: string;
        cost: number;
        mileage: number;
        notes?: string;
        date: string;
        media?: string[];
        vehicleId: number;
      },
      thunkAPI
    ) => {
      try {
        // First create the service history
        const { data: history, error: historyError } = await Supabase.client
          .from('service_histories')
          .insert({
            service_type_id: serviceTypeId,
            service_details: serviceDetails,
            custom_garage_name: provider,
            mileage,
            note: notes,
            date,
            media,
            user_vehicle_id: vehicleId,
          })
          .select()
          .single();
  
        if (historyError) {
          return thunkAPI.rejectWithValue(historyError.message);
        }
  
        // Then create the bill record
        if (cost > 0) {
          const { error: billError } = await Supabase.client
            .from('service_history_bills')
            .insert({
              service_history_id: history.id,
              total: cost,
              currency: 'USD',
            });
  
          if (billError) {
            return thunkAPI.rejectWithValue(billError.message);
          }
        }
  
        return history;
      } catch (error) {
        return thunkAPI.rejectWithValue('Failed to create service history');
      }
    }
  );