import {configureStore} from '@reduxjs/toolkit';
import appTimeReducer, {AppTimeSliceModel} from './appTime.slice';

export interface StoreState {
  appTime: AppTimeSliceModel;
}

export const store = configureStore({
  reducer: {
    appTime: appTimeReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
