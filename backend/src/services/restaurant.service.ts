import { Injectable } from '@nestjs/common';
import { DataResponse, MenuResponse } from '../types';

@Injectable()
export class RestaurantService {
  private readonly BASE_URL: string;

  constructor() {
    this.BASE_URL = 'https://cdn-dev.preoday.com/challenge';
  }

  async getRestaurantData(): Promise<DataResponse | undefined> {
    try {
      const response = await fetch(`${this.BASE_URL}/venue/9`);
      if (response.ok) {
        const restaurantData: DataResponse = await response.json();
        return restaurantData;
      }
    } catch (error) {
      console.error('error', error);
    }
  }

  async getRestaurantMenu(): Promise<MenuResponse | undefined> {
    try {
      const response = await fetch(`${this.BASE_URL}/menu`);
      if (response.ok) {
        const restaurantData: MenuResponse = await response.json();
        return restaurantData;
      }
    } catch (error) {
      console.error('error', error);
    }
  }
}
