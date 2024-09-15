import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist';
import storage from './storage';
import { appReducer } from './app/app.slice';
import { userReducer } from './user/user.slice'

const persistConfig = {
  key: 'auhobi',
  storage: storage,
}

const persistedReducer = persistReducer(persistConfig, combineReducers({
  app: appReducer,
  auth: userReducer
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