import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  origin: null,
  destination: null,
  travelTimeInformaion: null,
};

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducer: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelTimeInformaion: (state, action) => {
      state.travelTimeInformaion = action.payload;
    },
  },
});

export const {setOrigin, setDestination, setTravelTimeInformaion} =
  navSlice.actions;

export const selectOrigin = state => state.nav.origin;
export const selectDestination = state => state.nav.destination;
export const selectTravelTimeInformaion = state =>
  state.nav.travelTimeInformaion;

export default navSlice.reducer;
