import {configureStore} from '@reduxjs/toolkit';
import navReducer from '../redux/sliceReducesr';

export const store = configureStore({
  reducer: {
    nav: navReducer,
  },
});
