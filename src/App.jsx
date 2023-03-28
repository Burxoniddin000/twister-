import User from './pages/User'
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Acunt from './pages/Acunt';
import Login from './pages/Login';
import { AuthContext } from './pages/AuthContext';
import { useContext, useState } from 'react';

function App() {


  const { isLogin } = useContext(AuthContext);


  return (
    <>
      {/* <Login/> */}
      <Routes>
        {isLogin ? (
          <>
            <Route path='/' element={<User />} />
            <Route path='/Acunt' element={<Acunt />} />
            <Route path='/Login' element={<Login />} />
          </>
        ) : (
          <Route path='/' element={<Login />} />
        )}
      </Routes>
    </>
  );
}

export default App;
