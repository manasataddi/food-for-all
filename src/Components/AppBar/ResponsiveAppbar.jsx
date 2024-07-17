import React, { useState } from 'react';
// Import the CSS file for styling
import '../../Styles/Appbar/Appbar.css';
//importing files from mui
import { Button, Avatar, Menu, MenuItem, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const pages = ['About', 'Posts', 'Orders', 'Contact'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <header className="app-bar">
      <div className="container">
        <div className="logo">
          <a href="/home">LOGO</a>
        </div>

        <nav className={`nav-links ${isNavOpen ? 'open' : ''}`}>
          {pages.map((page) => (
            <a href={`#${page.toLowerCase()}`} key={page} onClick={toggleNav}>
              {page}
            </a>
          ))}
        </nav>
        <div className="user-settings">
          <Button onClick={handleOpenUserMenu}>
            <Avatar alt="User Avatar" src="/static/images/avatar/2.jpg" className="avatar" />
          </Button>
          <Menu
            sx={{ mt: '45px' }}
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </div>
        <Button className="menu-icon" onClick={toggleNav}>
          <MenuIcon />
        </Button>
      </div>
    </header>
  );
};

export default ResponsiveAppBar;
