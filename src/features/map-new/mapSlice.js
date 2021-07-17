import { createSlice } from '@reduxjs/toolkit';

export const mapSlice = createSlice({
  name: 'map',
  initialState: {
    idle: false,
    viewport: {
      latitude: 32.6141,
      longitude: -114.34411,
      zoom: 13,
      bearing: 150,
      pitch: 76
    }
  },
  reducers: {
    setIdle: (state, action) => {
      state.idle = action.payload
    },
    setViewport: (state, action) => {
      state.viewport = action.payload
    }
  },
});

export const { setIdle, setViewport } = mapSlice.actions;

export const getIdle = state => state.map.getIdle;
export const getViewport = state => state.map.getViewport;

export default mapSlice.reducer;
