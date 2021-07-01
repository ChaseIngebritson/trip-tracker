import { createSlice } from '@reduxjs/toolkit';

export const mapSlice = createSlice({
  name: 'map',
  initialState: {
    center: [-114.34411, 32.6141],
    zoom: 13,
    pitch: 76,
    bearing: 150,
    centerFlag: false,
    idle: false
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
    },
    setIdle: (state, action) => {
      state.idle = action.payload
    },
  },
});

export const { setCenter, setZoom, setPitch, setBearing, setCenterFlag, setIdle } = mapSlice.actions;

export const getCenter = state => state.map.center;
export const getZoom = state => state.map.zoom;
export const getPitch = state => state.map.pitch;
export const getBearing = state => state.map.bearing;
export const getCenterFlag = state => state.map.centerFlag;
export const getIdle = state => state.map.getIdle;

export default mapSlice.reducer;
