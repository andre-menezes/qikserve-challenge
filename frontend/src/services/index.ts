import { RestaurantConfig } from '../types';
import { BASE_URL } from '../utils/constants';

export async function getRestaurantWebSettings(): Promise<RestaurantConfig> {
  const response = await fetch(`${BASE_URL}/info`);
  if (response.ok) {
    const data = await response.json();
    return data.webSettings;
  }
  throw new Error('Failed to fetch restaurant web settings');
}
