import { useEffect } from 'react';
import './styles/index.css';
import './styles/reset.css';
import './styles/App.css';
import { getRestaurantWebSettings } from './services';
import { useDispatch } from 'react-redux';
import { AppRouter } from './router';

function App() {
  const dispatch = useDispatch();

  async function fetchRestaurantWebSettings() {
    const webSettings = await getRestaurantWebSettings();
    dispatch({ type: 'restaurant/setWebSettings', payload: webSettings });
  }

  useEffect(() => {
    fetchRestaurantWebSettings();
  }, []);

  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;
