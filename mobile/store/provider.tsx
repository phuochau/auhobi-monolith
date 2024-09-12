'use client'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistedStore, store } from './store'

export default function StoreProvider({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistedStore}>
        {children}
      </PersistGate>
    </Provider>
  )
}