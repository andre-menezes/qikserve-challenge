import { Link, useLocation } from 'react-router-dom';
import Banner from '../Banner';
import { MenuProps } from '@/types';
import './styles.css';
import { RootState } from '@/store';
import { useAppSelector } from '@/hooks';

const MenuDesktop: React.FC<MenuProps> = ({ menuItems }) => {
  const location = useLocation();

  const previousActive = menuItems.find((item) => item.active);
  const currentPage = menuItems.find((item) => item.path === location.pathname);

  if (previousActive) previousActive.active = false;
  if (currentPage) currentPage.active = true;

  const logo = useAppSelector((state: RootState) => state.restaurant.webSettings.bannerImage);

  return (
    <header className="header-desktop">
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
      {logo && <Banner src={logo} />}
    </header>
  );
};

export default MenuDesktop;
