import { createAsyncThunk } from "@reduxjs/toolkit";
import { Supabase } from "../../lib/supabase/client";
import { fetchUserVehicles } from "../auth/auth.actions";
import RNFS from 'react-native-fs';

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

export const uploadVehiclePhoto = createAsyncThunk(
    'vehicle/uploadPhoto',
    async (filePath: string, thunkAPI) => {
        try {
            const state = thunkAPI.getState() as any;
            const userId = state.auth.user?.id;
            const fileName = `vehicles/${Date.now()}-${Math.random().toString(36).substring(7)}.jpg`;
            
            // Read the file as base64
            const base64 = await RNFS.readFile(filePath, 'base64');

            const { data, error } = await Supabase.getStorage().upload(`${userId}/${fileName}`, base64, {
                    contentType: 'image/jpeg',
                    upsert: false,
                });

            if (error) {
                return thunkAPI.rejectWithValue(error.message);
            }

            const { data: { publicUrl } } = Supabase.getStorage().getPublicUrl(fileName);

            return publicUrl;
        } catch (error) {
            return thunkAPI.rejectWithValue('Failed to upload photo');
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
            const { data: vehicle, error } = await Supabase.client
                .from('user_vehicles')
                .insert([data])
                .select()
                .single();

            if (error) {
                return thunkAPI.rejectWithValue(error.message);
            }

            thunkAPI.dispatch(fetchUserVehicles());

            return vehicle;
        } catch (error) {
            return thunkAPI.rejectWithValue('Failed to create vehicle');
        }
    }
);