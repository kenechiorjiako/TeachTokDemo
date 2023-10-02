import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface AppTimeSliceModel {
  timeSpent: number;
}

let initialState: AppTimeSliceModel = {
  timeSpent: 0,
};

export const appTimeSlice = createSlice({
  name: 'appTime',
  initialState,
  reducers: {
    addToTimeSpent: (state: any, action: PayloadAction<any>) => {
      state.timeSpent = state.timeSpent + action.payload;
    },
  },
});

export default appTimeSlice.reducer;
