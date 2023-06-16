import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import './style.css';

export default function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Login />}>
          <Route index element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
}
