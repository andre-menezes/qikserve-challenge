import { Outlet } from 'react-router-dom';
import MenuMobile from '../components/MenuMobile';
import { menuList } from '@/utils/menu';
import './styles.css';
import MenuDesktop from '../components/MenuDesktop';
import { useEffect, useState } from 'react';

const DefaultLayout: React.FC = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setInnerWidth(window.innerWidth);
    });
  });

  return (
    <>
      {innerWidth < 768 ? <MenuMobile menuItems={menuList} /> : <MenuDesktop menuItems={menuList} />}
      <main className="main-content">
        <Outlet />
      </main>
    </>
  );
};

export default DefaultLayout;
