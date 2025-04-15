import { createAsyncThunk } from "@reduxjs/toolkit";
import { Supabase } from "../../lib/supabase/client";
import { fetchUserVehicles } from "../auth/auth.actions";

export const fetchVehicleBrands = createAsyncThunk(
    'vehicle/fetchBrands',
    async (_, thunkAPI) => {
      try {
        const { data: brands, error } = await Supabase.client
          .from('vehicle_brands')
          .select('*')
          .eq('is_hidden', false)
          .order('name');
  
        if (error) {
          return thunkAPI.rejectWithValue(error.message);
        }
  
        return brands;
      } catch (error) {
        return thunkAPI.rejectWithValue('Failed to fetch vehicle brands');
      }
    }
);

export const createVehicle = createAsyncThunk(
    'vehicle/createVehicle',
    async (data: {
        brand_id: number;
        model: string;
        year: string;
        name?: string;
        owner_id: string;
        photo?: string;
    }, thunkAPI) => {
        try {
            const state = thunkAPI.getState() as any;
            const userId = state.auth.user?.id;

            const { data: vehicle, error } = await Supabase.client
                .from('user_vehicles')
                .insert([{ ...data, user_id: userId }])
                .select()
                .single();

            if (error) {
                return thunkAPI.rejectWithValue(error.message);
            }

            thunkAPI.dispatch(fetchUserVehicles({ userId }));

            return vehicle;
        } catch (error) {
            return thunkAPI.rejectWithValue('Failed to create vehicle');
        }
    }
);