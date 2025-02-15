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

interface MenuProps {
  menuItems: MenuItem[];
}

export type { WebSettings, RestaurantConfig, MenuItem, MenuProps };
