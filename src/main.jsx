import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import App from './App.jsx';
import store from './redux/store.js'; // ✅ Use default import

import UserContext from './Context/UserContext.jsx';
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <UserContext>
      <App />
      <ToastContainer   autoClose={1000}
/>
    </UserContext>
  </Provider>
);
