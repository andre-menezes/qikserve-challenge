import { Link, useLocation } from 'react-router-dom';
import Banner from '../Banner';
import { MenuProps } from '@/types';
import logo from '@/assets/icons/logo.svg';
import './styles.css';

const MenuDesktop: React.FC<MenuProps> = ({ menuItems }) => {
  const location = useLocation();

  const previousActive = menuItems.find((item) => item.active);
  const currentPage = menuItems.find((item) => item.path === location.pathname);

  if (previousActive) previousActive.active = false;
  if (currentPage) currentPage.active = true;

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
      <Banner src={logo} />
    </header>
  );
};

export default MenuDesktop;
