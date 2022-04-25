import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import rootStore, { RootStore } from './store/configureStore';
import Home from './pages/Home';

const store: RootStore = rootStore();

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Routes>
          {/* <Route path='/' element={<Login />} /> */}
          <Route path='/' element={<Home />} />
        </Routes>
      </Provider>
    </div>
  );
};

export default App;
