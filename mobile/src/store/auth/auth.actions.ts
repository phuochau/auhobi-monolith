import { createAsyncThunk } from '@reduxjs/toolkit';
import { Supabase } from '../../lib/supabase/client';
import { Tables } from '../../lib/supabase/types';

export const initAuth = createAsyncThunk(
  'auth/initAuth',
  async (_, thunkAPI) => {
    const { data, error } = await Supabase.getSession();

    if (error || !data?.session?.user) {
      return null;
    }

    await thunkAPI.dispatch(fetchUserProfile({ userId: data.session.user.id }));
    console.log('fetched profile');
    await thunkAPI.dispatch(fetchUserVehicles({ userId: data.session.user.id }));
    console.log('fetched vehicles');

    return {
      user: data.session.user
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

    await thunkAPI.dispatch(fetchUserProfile({ userId: user.id }));
    await thunkAPI.dispatch(fetchUserVehicles({ userId: user.id }));

    return { user };
  }
);

export const signOut = createAsyncThunk('auth/signOut', async (_, thunkAPI) => {
  const { error } = await Supabase.signOut();
  if (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
  return true;
});

export const fetchUserProfile = createAsyncThunk(
  'auth/fetchUserProfile',
  async ({ userId }: { userId: string }, thunkAPI) => {
    if (!userId) {
      return thunkAPI.rejectWithValue('User not authenticated');
    }

    const { data: profile, error } = await Supabase.client
      .from('profiles')
      .select('*')
      .eq('user_id', userId)
      .single();

    if (error) {
      return thunkAPI.rejectWithValue(error.message);
    }

    return profile;
  }
);

export const fetchUserVehicles = createAsyncThunk(
  'auth/fetchUserVehicles',
  async ({ userId }: { userId: string }, thunkAPI) => {
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

export const signUp = createAsyncThunk(
  'auth/signUp',
  async ({ email, password }: { email: string; password: string }, thunkAPI) => {
    // Sign up with Supabase
    const { data: authData, error: authError } = await Supabase.client.auth.signUp({
      email,
      password,
    });

    if (authError) {
      return thunkAPI.rejectWithValue(authError.message);
    }

    if (!authData.user) {
      return thunkAPI.rejectWithValue('User creation failed');
    }

    return { user: authData.user };
  }
);
