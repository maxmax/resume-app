import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { githubApi } from '@/services';

const rootReducer = combineReducers({
  [githubApi.reducerPath]: githubApi.reducer,
});

interface PreloadedState {}

export const setupStore = (preloadedState?: PreloadedState) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        githubApi.middleware,
      ),
    preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];