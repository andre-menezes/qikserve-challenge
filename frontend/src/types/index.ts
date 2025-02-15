interface WebSettings {
  backgroundColour: string;
  bannerImage: string;
  navBackgroundColour: string;
  primaryColour: string;
  primaryColourHover: string;
}

interface RestaurantConfig {
  webSettings: WebSettings;
}

interface MenuItem {
  title: string;
  path: string;
  component: React.ComponentType;
  active: boolean;
}

export type { WebSettings, RestaurantConfig, MenuItem };
