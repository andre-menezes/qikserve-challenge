import { MenuProps } from '@/types';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import menu from '@/assets/icons/menu.svg';
import './styles.css';
import Banner from '../Banner';
import logo from '@/assets/icons/logo.svg';

const MenuMobile: React.FC<MenuProps> = ({ menuItems }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const location = useLocation();
  const currentPage = menuItems.find((item) => item.path === location.pathname)?.title;

  return (
    <header className="header-mobile">
      <div className="header-mobile__wrapper">
        <section>
          <div></div>
          <h2>{currentPage}</h2>
          <nav>
            <img src={menu} alt="Menu" onClick={() => setOpenMenu(!openMenu)} />
            <ul className="menu-mobile" style={{ display: openMenu ? 'flex' : 'none' }}>
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
        <Banner src={logo} />
      </div>
    </header>
  );
};

export default MenuMobile;
