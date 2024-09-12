'use client'

import StoreProvider from '@/store/provider';
import { Slot, useRootNavigationState } from 'expo-router';

export default function AppLayout() {
  const navigationState = useRootNavigationState()

  if (!navigationState?.key) {
    return null
  }

  return (
    <StoreProvider>
        <Slot />
    </StoreProvider>
  )
}