import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import rootStore, { RootStore } from './store/configureStore';
import { AppBar } from '@material-ui/core';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import OpenSource from './pages/OpenSource';
import Resume from './pages/Resume';
import Header from './component/layout/Header';
import PortfolioDetail from './pages/PortfolioDetail';

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
          <Route path='/portfolio/:company/:project' element={<PortfolioDetail />} />
          <Route path='/openSource' element={<OpenSource />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </Provider>
    </div>
  );
};

export default App;
