import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist';
import { authReducer } from './auth/auth.slice'
import storage from './storage';

const persistConfig = {
  key: 'bbb',
  storage: storage,
}

const persistedReducer = persistReducer(persistConfig, combineReducers({
  auth: authReducer
}))

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export const persistedStore = persistStore(store)

export type AppStore = typeof store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch