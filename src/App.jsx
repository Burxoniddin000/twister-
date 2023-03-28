import User from './pages/User'
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Acunt from './pages/Acunt';

function App() {
  return (
    <>
    {/* <Login/> */}
      <Routes>
        <Route path='/' element={<User />} />
        <Route path='/Acunt' element={<Acunt />} />
    </Routes>
    </>
  );
}

export default App;
