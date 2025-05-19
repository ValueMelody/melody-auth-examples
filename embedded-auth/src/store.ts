import {
  configureStore,
} from '@reduxjs/toolkit'
import { embeddedAuthApi } from './services/embedded-auth'

const store = configureStore({
  reducer: {
    [embeddedAuthApi.reducerPath]: embeddedAuthApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(embeddedAuthApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store }
