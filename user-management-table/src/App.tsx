import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import UserManagementTable from './components/UserManagementTable';
import './App.css';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <UserManagementTable />
      </div>
    </Provider>
  );
};

export default App;