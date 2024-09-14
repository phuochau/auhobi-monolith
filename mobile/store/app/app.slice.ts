import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { I18n } from 'i18n-js';
import { getLocales } from 'expo-localization';
import { REHYDRATE } from 'redux-persist';

const i18n = new I18n();
i18n.defaultLocale = 'en'
i18n.enableFallback = true;

const deviceLocale = getLocales()?.[0]?.languageCode ?? 'en'
i18n.locale = deviceLocale;

// Define a type for the slice state
export interface AppState {
  locale?: string
}

// Define the initial state using that type
const initialState: AppState = {
  locale: deviceLocale
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLocale: (state, action: PayloadAction<string>) => {
      const locale = action.payload
      i18n.locale = locale

      return {
        ...state,
        locale
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(REHYDRATE, (state) => {
      if (state.locale) {
        i18n.locale = state.locale
      }
      return state
    })
  },
})

export const { setLocale } = appSlice.actions

export const appReducer = appSlice.reducer