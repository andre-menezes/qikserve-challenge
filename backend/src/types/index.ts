interface WebSettings {
  id: number;
  venueId: number;
  bannerImage: string;
  backgroundColour: string;
  primaryColour: string;
  primaryColourHover: string;
  navBackgroundColour: string;
}

export interface DataResponse {
  id: number;
  name: string;
  internalName: string;
  description: string | null;
  liveFlag: number;
  demoFlag: number;
  address1: string;
  address2: string | null;
  address3: string | null;
  city: string;
  county: string;
  postcode: string;
  country: string;
  timezoneOffset: string;
  locale: string;
  timeZone: string;
  webSettings: WebSettings;
  ccy: string;
  ccySymbol: string;
  currency: string;
}

export interface RestaurantData {
  id: number;
  name: string;
  internalName: string;
  locale: string;
  webSettings: WebSettings;
  ccy: string;
  ccySymbol: string;
  currency: string;
}

type AvailabilityType = 'AVAILABLE_NOW';
type MenuType = 'MENU';

interface Image {
  id: number;
  image: string;
}

interface Product {
  id: number;
  name: string;
  alcoholic: number;
  price: number;
  position: number;
  visible?: number;
  availabilityType: AvailabilityType;
  available: boolean;
}

interface ProductModifier extends Product {
  maxChoices: number;
  qty?: number;
}

interface Drink extends Product {
  sku: string;
}

interface Dessert extends Product {
  images: Image[];
}

interface Burger extends Product {
  description: string;
  sku: string;
  modifiers?: Modifier[];
  images: Image[];
}

interface Modifier {
  id: number;
  name: string;
  minChoices: number;
  maxChoices: number;
  items: ProductModifier[] | BurgerModifierItem[];
}

interface Section {
  id: number;
  name: string;
  position: number;
  images: Image[];
  items: Burger[] | Drink[] | Dessert[];
}

interface BurgerSection extends Section {
  description: string | null;
  visible: number;
}

interface DrinkSection extends Section {
  visible: number;
}

interface DessertSection extends Section {}

export interface MenuResponse {
  id: number;
  name: string;
  type: MenuType;
  collapse: number;
  sections: BurgerSection[] | DrinkSection[] | DessertSection[];
}

interface DessertItem {
  id: number;
  name: string;
  alcoholic: number;
  price: number;
  images: Image[];
  available: boolean;
}

interface MenuDessert {
  name: string;
  bannerImage: string;
  items: DessertItem[];
}

interface DrinkItem {
  id: number;
  name: string;
  alcoholic: number;
  price: number;
  available: boolean;
}

interface MenuDrink {
  name: string;
  bannerImage: string;
  items: DrinkItem[];
}

interface BurgerModifierItem {
  id: number;
  name: string;
  price: number;
  maxChoices: number;
  qty?: number;
  available: boolean;
}

interface BurgerItem {
  id: number;
  name: string;
  description: string;
  price: number;
  available: boolean;
  images: Image[];
  modifiers: Modifier[];
}

interface MenuBurger {
  name: string;
  bannerImage: string;
  items: BurgerItem[];
}

export interface RestaurantMenu {
  id: number;
  sections: MenuDessert[] | MenuDrink[] | MenuBurger[];
}
