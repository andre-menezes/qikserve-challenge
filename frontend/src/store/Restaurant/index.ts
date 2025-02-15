import { RestaurantConfig } from '../../types';

const initalState: RestaurantConfig = {
  webSettings: {
    backgroundColour: '',
    bannerImage: '',
    navBackgroundColour: '',
    primaryColour: '',
    primaryColourHover: '',
  },
};

const restaurantReducer = (state: RestaurantConfig = initalState, action: { type: string; payload: any }) => {
  switch (action.type) {
    case 'UPDATE_RESTAURANT_CONFIG':
      return {
        ...state,
        webSettings: action.payload,
      };
    default:
      return state;
  }
};

export default restaurantReducer;
