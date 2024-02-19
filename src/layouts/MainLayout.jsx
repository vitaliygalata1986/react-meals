import { Outlet } from 'react-router-dom';
import Header from '../component/Header';
import Footer from '../component/Footer';
import { ContextProvider } from '../context/context';
const MainLayout = () => {
  return (
    <>
      <Header />
      <ContextProvider>
        <main className="container content">
          <Outlet />
        </main>
      </ContextProvider>
      <Footer />
    </>
  );
};

export default MainLayout;
