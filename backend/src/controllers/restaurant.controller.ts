import { Controller, Get } from '@nestjs/common';
import { RestaurantService } from '../services';
import { MenuResponse, RestaurantData, RestaurantMenu } from '../types';

@Controller('/restaurant')
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Get('/info')
  async getRestaurantData(): Promise<RestaurantData | undefined> {
    const data = await this.restaurantService.getRestaurantData();
    let restaurantData: RestaurantData | undefined = undefined;

    if (data) {
      restaurantData = {
        id: data.id,
        name: data.name,
        internalName: data.internalName,
        locale: data.locale,
        webSettings: {
          id: data.webSettings.id,
          venueId: data.webSettings.venueId,
          bannerImage: data.webSettings.bannerImage,
          backgroundColour: data.webSettings.backgroundColour,
          primaryColour: data.webSettings.primaryColour,
          primaryColourHover: data.webSettings.primaryColourHover,
          navBackgroundColour: data.webSettings.navBackgroundColour,
        },
        ccy: data.ccy,
        ccySymbol: data.ccySymbol,
        currency: data.currency,
      };
    }
    return restaurantData;
  }

  @Get('/menu')
  async getRestaurantMenu(): Promise<RestaurantMenu | undefined> {
    const data: MenuResponse | undefined =
      await this.restaurantService.getRestaurantMenu();
    if (data) {
      const sections = data.sections.map((sec) => {
        const items = sec.items.map((item) => {
          let modifiers = null;
          if (item.modifiers) {
            modifiers = item.modifiers.map((m) => {
              return {
                name: m.name,
                minChoices: m.minChoices,
                maxChoices: m.maxChoices,
                items: m.items.map((i) => {
                  return {
                    name: i.name,
                    price: i.price,
                    maxChoices: i.maxChoices,
                  };
                }),
              };
            });
          }
          return {
            id: item.id,
            name: item.name,
            description: item.description || null,
            modifiers: modifiers,
            alcoholic: item.alcoholic,
            price: item.price,
            available: item.available,
          };
        });
        return {
          name: sec.name,
          bannerImage: sec.images[0].image,
          items: items,
        };
      });
      return { id: data.id, sections };
    }
    return undefined;
  }
}
