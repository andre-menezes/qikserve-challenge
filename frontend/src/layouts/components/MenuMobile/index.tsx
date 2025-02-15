import { MenuProps } from '@/types';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import menu from '@/assets/icons/menu.svg';
import './styles.css';
import Banner from '../Banner';
import { RootState } from '@/store';
import { useAppSelector } from '@/hooks';

const MenuMobile: React.FC<MenuProps> = ({ menuItems }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const location = useLocation();
  const currentPage = menuItems.find((item) => item.path === location.pathname)?.title;

  const BANNER = useAppSelector((state: RootState) => state.restaurant.webSettings.bannerImage);
  const NAV_BACKGROUND_COLOUR = useAppSelector((state: RootState) => state.restaurant.webSettings.navBackgroundColour);

  return (
    <header className="header-mobile" style={{ backgroundColor: NAV_BACKGROUND_COLOUR }}>
      <div className="header-mobile__wrapper">
        <section>
          <div></div>
          <h2>{currentPage}</h2>
          <nav>
            <img src={menu} alt="Menu" onClick={() => setOpenMenu(!openMenu)} />
            <ul
              className="menu-mobile"
              style={{ display: openMenu ? 'flex' : 'none', backgroundColor: NAV_BACKGROUND_COLOUR }}
            >
              {menuItems.map(({ path, title }, index) => {
                return (
                  <Link to={path} key={index} onClick={() => setOpenMenu(false)}>
                    {title}
                  </Link>
                );
              })}
            </ul>
          </nav>
        </section>
        {BANNER && <Banner src={BANNER} />}
      </div>
    </header>
  );
};

export default MenuMobile;
