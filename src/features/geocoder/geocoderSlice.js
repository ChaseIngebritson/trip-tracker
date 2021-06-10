import { createSlice } from '@reduxjs/toolkit';

export const geocoderSlice = createSlice({
  name: 'geocoder',
  initialState: {
    location: {},
    search: ''
  },
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload
    },
    setSearch: (state, action) => {
      state.search = action.payload
    },
  },
});

export const { setLocation, setSearch } = geocoderSlice.actions;

export const getLocation = state => state.geocoder.location;
export const getSearch = state => state.geocoder.search;

export default geocoderSlice.reducer;
