import { createSlice } from '@reduxjs/toolkit';

export const mapSlice = createSlice({
  name: 'map',
  initialState: {
    center: [-114.34411, 32.6141],
    zoom: 13.1,
    pitch: 85,
    bearing: 80,
    centerFlag: false
  },
  reducers: {
    setCenter: (state, action) => {
      state.center = action.payload
    },
    setZoom: (state, action) => {
      state.zoom = action.payload
    },
    setPitch: (state, action) => {
      state.pitch = action.payload
    },
    setBearing: (state, action) => {
      state.bearing = action.payload
    },
    setCenterFlag: (state, action) => {
      state.centerFlag = action.payload
    }
  },
});

export const { setCenter, setZoom, setPitch, setBearing, setCenterFlag } = mapSlice.actions;

export const getCenter = state => state.map.center;
export const getZoom = state => state.map.zoom;
export const getPitch = state => state.map.pitch;
export const getBearing = state => state.map.bearing;
export const getCenterFlag = state => state.map.centerFlag;

export default mapSlice.reducer;