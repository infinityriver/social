import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

import UsersContainer from './components/Users/UsersContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';


const App = () => {
  return (
      <div className='app-wrapper'>
        <BrowserRouter>
          <HeaderContainer />
          <Navbar />

          <div className='app-wrapper-content'>
            <Routes>
              <Route path='/dialogs/:id' element={<DialogsContainer  /> } />
              <Route path='/profile/:id?' element={<ProfileContainer /> } />
              <Route path='/users' element={<UsersContainer />} />
            </Routes>
  
          </div>
            
        </BrowserRouter>
        
      </div>);
}

export default App;
