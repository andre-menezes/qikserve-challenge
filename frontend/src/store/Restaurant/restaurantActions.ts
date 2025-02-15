import { RestaurantConfig, WebSettings } from '../../types';

const setWebSettings = (state: RestaurantConfig, action: { type: string; payload: WebSettings }): void => {
  state.webSettings = action.payload;
};

export { setWebSettings };
