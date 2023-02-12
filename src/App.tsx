import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import rootStore, { RootStore } from './store/configureStore';
import { AppBar } from '@material-ui/core';
import Home from './views/Home/Home';
import Portfolio from './views/Portfolio/Portfolio';
import OpenSource from './views/OpenSource/OpenSource';
import Resume from './views/Resume/Resume';
import Header from './views/Header/Header';
import PortfolioDetail from './views/Portfolio/PortfolioDetail';

const store: RootStore = rootStore();

const App = () => {
  return (
    <div>
      <AppBar position='relative' color='transparent' elevation={0}>
        <Header />
      </AppBar>
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/portfolio/:companyId/:projectId' element={<PortfolioDetail />} />
          <Route path='/openSource' element={<OpenSource />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </Provider>
    </div>
  );
};

export default App;
