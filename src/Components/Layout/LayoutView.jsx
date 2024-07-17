// src/Components/Layout/LayoutView.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import ResponsiveAppBar from '../AppBar/ResponsiveAppbar';

const LayoutView = () => {
  return (
    <>
      <ResponsiveAppBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default LayoutView;
