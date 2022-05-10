import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import rootStore, { RootStore } from './store/configureStore';
import { AppBar } from '@material-ui/core';
import Home from './pages/Home';
import Post from './pages/Post';
import Portfolio from './pages/Portfolio';
import OpenSource from './pages/OpenSource';
import Resume from './pages/Resume';
import Idea from './pages/Idea';
import Header from './component/layout/Header';

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
          <Route path='/openSource' element={<OpenSource />} />
          <Route path='/resume' element={<Resume />} />
        </Routes>
      </Provider>
    </div>
  );
};

export default App;
