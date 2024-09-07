import React, { useState } from 'react';
import 'flowbite';

const Workout1 = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="max-w-2xl mx-auto">
      <div className="border-b border-gray-200 dark:border-gray-700 mb-4">
        <ul className="flex flex-wrap -mb-px" role="tablist">
          <li className="mr-2" role="presentation">
            <button
              className={`inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center ${
                activeTab === 'profile'
                  ? 'border-b-2 border-gray-300'
                  : 'border-transparent'
              } dark:text-gray-400 dark:hover:text-gray-300`}
              onClick={() => setActiveTab('profile')}
              role="tab"
              aria-controls="profile"
              aria-selected={activeTab === 'profile'}
            >
              Profile
            </button>
          </li>
          <li className="mr-2" role="presentation">
            <button
              className={`inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center ${
                activeTab === 'dashboard'
                  ? 'border-b-2 border-gray-300'
                  : 'border-transparent'
              } dark:text-gray-400 dark:hover:text-gray-300`}
              onClick={() => setActiveTab('dashboard')}
              role="tab"
              aria-controls="dashboard"
              aria-selected={activeTab === 'dashboard'}
            >
              Dashboard
            </button>
          </li>
          <li className="mr-2" role="presentation">
            <button
              className={`inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center ${
                activeTab === 'settings'
                  ? 'border-b-2 border-gray-300'
                  : 'border-transparent'
              } dark:text-gray-400 dark:hover:text-gray-300`}
              onClick={() => setActiveTab('settings')}
              role="tab"
              aria-controls="settings"
              aria-selected={activeTab === 'settings'}
            >
              Settings
            </button>
          </li>
          <li role="presentation">
            <button
              className={`inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center ${
                activeTab === 'contacts'
                  ? 'border-b-2 border-gray-300'
                  : 'border-transparent'
              } dark:text-gray-400 dark:hover:text-gray-300`}
              onClick={() => setActiveTab('contacts')}
              role="tab"
              aria-controls="contacts"
              aria-selected={activeTab === 'contacts'}
            >
              Contacts
            </button>
          </li>
        </ul>
      </div>

      <div>
        {activeTab === 'profile' && (
          <div
            className="bg-gray-50 p-4 rounded-lg dark:bg-gray-800"
            id="profile"
            role="tabpanel"
          >
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              This is some placeholder content for the{' '}
              <strong className="font-medium text-gray-800 dark:text-white">
                Profile tab's associated content.
              </strong>{' '}
              Clicking another tab will toggle the visibility of this one for
              the next.
            </p>
          </div>
        )}

        {activeTab === 'dashboard' && (
          <div
            className="bg-gray-50 p-4 rounded-lg dark:bg-gray-800"
            id="dashboard"
            role="tabpanel"
          >
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              This is some placeholder content for the{' '}
              <strong className="font-medium text-gray-800 dark:text-white">
                Dashboard tab's associated content.
              </strong>{' '}
              Clicking another tab will toggle the visibility of this one for
              the next.
            </p>
          </div>
        )}

        {activeTab === 'settings' && (
          <div
            className="bg-gray-50 p-4 rounded-lg dark:bg-gray-800"
            id="settings"
            role="tabpanel"
          >
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              This is some placeholder content for the{' '}
              <strong className="font-medium text-gray-800 dark:text-white">
                Settings tab's associated content.
              </strong>{' '}
              Clicking another tab will toggle the visibility of this one for
              the next.
            </p>
          </div>
        )}

        {activeTab === 'contacts' && (
          <div
            className="bg-gray-50 p-4 rounded-lg dark:bg-gray-800"
            id="contacts"
            role="tabpanel"
          >
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              This is some placeholder content for the{' '}
              <strong className="font-medium text-gray-800 dark:text-white">
                Contacts tab's associated content.
              </strong>{' '}
              Clicking another tab will toggle the visibility of this one for
              the next.
            </p>
          </div>
        )}
      </div>

      <p className="mt-5">
        This tabs component is part of a larger, open-source library of Tailwind
        CSS components. Learn more by going to the official{' '}
        <a
          className="text-blue-600 hover:underline"
          href="https://flowbite.com/docs/"
          target="_blank"
          rel="noreferrer"
        >
          Flowbite Documentation
        </a>
        .
      </p>
    </div>
  );
};

export default Workout1;
