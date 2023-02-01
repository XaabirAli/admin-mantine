import React from 'react';
import { Button, Header, Input, Paper ,Text } from '@mantine/core';
import './App.css';
import { Login } from './Components/LoginPage';
import { Admin } from './Components/Adim';
import { Routes, Route } from 'react-router-dom';





function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path ='/admin' element={<Admin/>}/>
        </Routes>
    </div>
  );
}

export default App;
