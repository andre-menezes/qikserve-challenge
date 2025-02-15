import { Link, useLocation } from 'react-router-dom';
import Banner from '../Banner';
import { MenuProps } from '@/types';
import './styles.css';
import { useAppSelector } from '@/hooks';
import { RootState } from '@/store';

const MenuDesktop: React.FC<MenuProps> = ({ menuItems }) => {
  const location = useLocation();

  const previousActive = menuItems.find((item) => item.active);
  const currentPage = menuItems.find((item) => item.path === location.pathname);

  if (previousActive) previousActive.active = false;
  if (currentPage) currentPage.active = true;

  const LOGO = useAppSelector((state: RootState) => state.restaurant.webSettings.bannerImage);
  const NAV_BACKGROUND_COLOUR = useAppSelector((state: RootState) => state.restaurant.webSettings.navBackgroundColour);

  return (
    <header className="header-desktop" style={{ backgroundColor: NAV_BACKGROUND_COLOUR }}>
      <nav>
        <ul>
          {menuItems.map(({ path, title, active }, index) => {
            return (
              <li className={active ? 'active' : ''} key={index}>
                <Link to={path} key={index}>
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      {LOGO && <Banner src={LOGO} />}
    </header>
  );
};

export default MenuDesktop;
