import { configureStore } from '@reduxjs/toolkit';
import mapReducer from '../features/map/mapSlice';

export default configureStore({
  devTools: true,
  reducer: {
    map: mapReducer,
  },
});
