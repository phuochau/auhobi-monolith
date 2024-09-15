import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { REHYDRATE } from 'redux-persist';
import { deviceLocale, i18n } from '@/localization';

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
    builder.addCase<typeof REHYDRATE, { type: typeof REHYDRATE, payload: Partial<{ app: AppState }> }>(REHYDRATE, (state, action) => {
      const appState = action.payload?.app
      if (appState?.locale) {
        i18n.locale = appState.locale
      }
      return appState
    })
  },
})

export const { setLocale } = appSlice.actions

export const appReducer = appSlice.reducer