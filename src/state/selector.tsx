import {createSelector} from '@reduxjs/toolkit';
import {AppTimeSliceModel} from './appTime.slice';
import {RootState} from './store';

export const selectAppTimeState = createSelector(
  (state: RootState) => state.appTime,
  (auth: AppTimeSliceModel) => {
    return auth;
  },
);
