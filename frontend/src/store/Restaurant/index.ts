import { createSlice } from '@reduxjs/toolkit';
import { RestaurantConfig } from '../../types';
import { setWebSettings } from './restaurantActions';

const initialState: RestaurantConfig = {
  webSettings: {
    backgroundColour: '',
    bannerImage: '',
    navBackgroundColour: '',
    primaryColour: '',
    primaryColourHover: '',
  },
};

const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setWebSettings,
  },
});

export default restaurantSlice.reducer;
