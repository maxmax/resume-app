import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { githubApi } from '@/services';
import userReducer from './slices/userSlice'; // Import the reducer for the user

const rootReducer = combineReducers({
  [githubApi.reducerPath]: githubApi.reducer,
  user: userReducer, // Add a reducer for the user to the root reducer
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