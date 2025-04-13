import { createAsyncThunk } from '@reduxjs/toolkit';
import { Supabase } from '../../lib/supabase/client';

export const initAuth = createAsyncThunk(
  'auth/initAuth',
  async (_, thunkAPI) => {
    const { data, error } = await Supabase.getSession();

    if (error || !data?.session?.user) {
      return null;
    }

    console.log('before fetching profile', data.session.user);

    let profile = null
    try {
      const response = await Supabase.client
        .from('profiles')
        .select('*')
        .eq('user_id', data.session.user.id)
        .single();

      const profileError = response.error
      profile = response.data

      console.log(profile, profileError);
      if (profileError) {
        thunkAPI.dispatch(signOut());
        return thunkAPI.rejectWithValue(profileError.message);
      }
    } catch (err) {
      console.log('err', err)
    }

    return {
      user: data.session.user,
      profile
    };
  }
);


export const signIn = createAsyncThunk(
  'auth/signIn',
  async ({ email, password }: { email: string; password: string }, thunkAPI) => {
    const { data, error } = await Supabase.client.auth.signInWithPassword({ email, password });

    if (error) {
      return thunkAPI.rejectWithValue(error.message);
    }

    const user = data.user;
    if (!user) {
      return thunkAPI.rejectWithValue('User not found');
    }

    const {
      data: profile,
      error: profileError,
    } = await Supabase.client
      .from('profiles')
      .select('*')
      .eq('user_id', user.id)
      .single();

    if (profileError) {
      return thunkAPI.rejectWithValue(profileError.message);
    }

    if (!profile) {
      return thunkAPI.rejectWithValue('Profile not found');
    }

    return { user, profile }; // Will be typed as Profile
  }
);

export const signOut = createAsyncThunk('auth/signOut', async (_, thunkAPI) => {
  const { error } = await Supabase.signOut();
  if (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
  return true;
});

export const fetchUserVehicles = createAsyncThunk(
  'auth/fetchUserVehicles',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as any;
    const userId = state.auth.user?.id;

    if (!userId) {
      return thunkAPI.rejectWithValue('User not authenticated');
    }

    const { data: vehicles, error } = await Supabase.client
      .from('user_vehicles')
      .select('*')
      .eq('owner_id', userId);

    if (error) {
      return thunkAPI.rejectWithValue(error.message);
    }

    return vehicles;
  }
);
