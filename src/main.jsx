import Layout from './Layout.jsx';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Setting from './components/Setting/Setting.jsx';
import ApiKey from './components/ApiKey.jsx';
import Overview from './components/Overview/Overview.jsx';
import Usage from './components/Usage/Usage.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/account/user-settings' element={<Setting />} />
      <Route path='/account/api-keys' element={<ApiKey />} />
      <Route path='/account/overview' element={<Overview />} />
      <Route path='/account/usage' element={<Usage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
