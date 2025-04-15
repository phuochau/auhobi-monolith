import { createAsyncThunk } from "@reduxjs/toolkit";
import { Supabase } from "../../lib/supabase/client";
import { Tables } from "../../lib/supabase/types";

export const fetchServiceTypes = createAsyncThunk(
  'serviceHistory/fetchServiceTypes',
  async (_, thunkAPI) => {
    try {
      const { data: serviceTypes, error } = await Supabase.client
        .from('ref_service_types')
        .select('*')
        .order('name');

      if (error) {
        return thunkAPI.rejectWithValue(error.message);
      }

      return serviceTypes;
    } catch (error) {
      return thunkAPI.rejectWithValue('Failed to fetch service types');
    }
  }
);

export type ServiceHistoryType = Omit<Tables<"service_histories">, "service_type_id"> & {
  ref_service_types: Tables<"ref_service_types">
}

export const fetchServiceHistories = createAsyncThunk<ServiceHistoryType[], number>(
    'serviceHistory/fetchHistories',
    async (vehicleId: number, thunkAPI) => {
      try {
        const { data, error } = await Supabase.client
          .from('service_histories')
          .select('*, ref_service_types(*)')
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
        cost?: number;
        mileage: number;
        notes?: string;
        date: string;
        media?: string[];
        vehicleId: number;
      },
      thunkAPI
    ) => {
      try {
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
            cost
          })
          .select()
          .single();
 
          
        if (historyError) {
          return thunkAPI.rejectWithValue(historyError.message);
        }
  
        return history;
      } catch (error) {
        return thunkAPI.rejectWithValue('Failed to create service history');
      }
    }
  );