/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Splash from './screens/Splash';
import Login from './screens/Login';
import Home from './screens/Home';
import Search from './screens/Search';
import Profile from './screens/Profile';
import Library from './screens/Library';
import BottomNav from './components/BottomNav';

function AppContent() {
  const location = useLocation();
  const showBottomNav = ['/home', '/search', '/profile', '/library'].includes(location.pathname);

  return (
    <>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/library" element={<Library />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      {showBottomNav && <BottomNav />}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
