import { RestaurantConfig } from '../types';
import { BASE_URL } from '../utils/constants';

export async function getRestaurantWebSettings(): Promise<RestaurantConfig> {
  const response = await fetch(`${BASE_URL}/settings`);
  if (!response.ok) {
    throw new Error('Failed to fetch restaurant web settings');
  }
  const data = await response.json();
  return data.webSettings;
}

export async function getRestaurantMenu(): Promise<any> {
  const response = await fetch(`${BASE_URL}/menu`);
  if (!response.ok) {
    throw new Error('Failed to fetch restaurant web settings');
  }
  const data = await response.json();
  console.log('data', data);
  return data;
}
