import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const [showBillingSubmenu, setShowBillingSubmenu] = useState(false);

  const toggleBillingSubmenu = () => {
    setShowBillingSubmenu(!showBillingSubmenu);
  };

  return (
    <div className='bg-white border 1px text-black w-64 h-screen'>
      <div className='p-4 text-2xl font-bold text-emerald-600'>Connectify</div>

      <div className='p-4 font-bold'>Organization</div>
      <ul className='pl-4'>
        <li className='mb-2 cursor-pointer'>
          <NavLink
            to='account/overview'
            className={({ isActive }) =>
              `duration-200 ${isActive ? 'text-green-500' : 'text-gray-500'}  `
            }
          >
            Overview
          </NavLink>
        </li>
        
        <li className='mb-2 cursor-pointer'>
          <NavLink
            to='account/usage'
            className={({ isActive }) =>
              `duration-200 ${isActive ? 'text-green-500' : 'text-gray-500'}  `
            }
          >
            Usage
          </NavLink>
        </li>

        <li className='mb-2 cursor-pointer'>
          <NavLink
            to='account/limits'
            className={({ isActive }) =>
              `duration-200 ${isActive ? 'text-green-500' : 'text-gray-500'}  `
            }
          >
            Limits
          </NavLink>
        </li>

        <li className='mb-2 cursor-pointer'>
          <NavLink
            to='account/members'
            className={({ isActive }) =>
              `duration-200 ${isActive ? 'text-green-500' : 'text-gray-500'}  `
            }
          >
            Members
          </NavLink>
        </li>
        <li onClick={toggleBillingSubmenu} className='cursor-pointer mb-2'>
          Billing
          {showBillingSubmenu && (
            <ul className='pl-4'>
              <li className='mb-2 cursor-pointer'>
                <NavLink
                  to='/account/billing/overview'
                  className={({ isActive }) =>
                    `duration-200 ${
                      isActive ? 'text-green-500' : 'text-gray-500'
                    }  `
                  }
                >
                  Overview
                </NavLink>
              </li>{' '}
              <li className='mb-2 cursor-pointer'>
                <NavLink
                  to='/account/billing/payment-methods'
                  className={({ isActive }) =>
                    `duration-200 ${
                      isActive ? 'text-green-500' : 'text-gray-500'
                    }  `
                  }
                >
                  Payment Methods
                </NavLink>
              </li>
              <li className='mb-2 cursor-pointer'>
                <NavLink
                  to='/account/billing/history'
                  className={({ isActive }) =>
                    `duration-200 ${
                      isActive ? 'text-green-500' : 'text-gray-500'
                    }  `
                  }
                >
                  Billing History
                </NavLink>
              </li>
              <li className='mb-2 cursor-pointer'>
                <NavLink
                  to='/account/billing/preferences'
                  className={({ isActive }) =>
                    `duration-200 ${
                      isActive ? 'text-green-500' : 'text-gray-500'
                    }  `
                  }
                >
                  Preferences
                </NavLink>
              </li>
            </ul>
          )}
        </li>
      </ul>
      <div className='p-4 font-bold'>User</div>
      <ul className='pl-4'>
        <li className='mb-2 cursor-pointer'>
          <NavLink
            to='/account/user-settings'
            className={({ isActive }) =>
              `duration-200 ${isActive ? 'text-green-500' : 'text-gray-700'}  `
            }
          >
            Settings
          </NavLink>
        </li>

        <li className='mb-2 cursor-pointer'>
          <NavLink
            to='/account/api-keys'
            className={({ isActive }) =>
              `duration-200 ${isActive ? 'text-green-500' : 'text-gray-500'}  `
            }
          >
            API Keys
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
