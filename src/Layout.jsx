/* eslint-disable react/prop-types */
import Header from './shared/Header';
import Sidebar from './shared/Sidebar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="flex">
      <Header/>
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Layout;
