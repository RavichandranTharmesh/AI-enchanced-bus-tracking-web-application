import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import UserLogin from './pages/login/userlogin';
import AdminLogin from './pages/login/adminlogin';
import Signup from './pages/login/signup';

import Dashboard from './pages/dashboard';
import MapScreen from './pages/map';

import AddBus from './pages/addBus';
import AssignCustomer from './pages/assignCustomer';

import UserHome from './pages/user/userhome';
import UserMapScreen from './pages/user/usermap';

const App = () => {

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<UserLogin />} />
          <Route path="/AdminLogin" element={<AdminLogin />} />
          <Route path="/Signup" element={<Signup />} />

          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/MapScreen" element={<MapScreen />} />

          <Route path="/AddBus" element={<AddBus />} />
          <Route path="/AssignCustomer" element={<AssignCustomer />} />

          <Route path="/UserHome/:id" element={<UserHome />} />
          <Route path="/UserMapScreen/:id" element={<UserMapScreen />} />

        </Routes>
      </div>
    </BrowserRouter>
  );

};

export default App;
