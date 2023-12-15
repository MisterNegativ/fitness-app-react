import React from 'react';
import { Link } from 'react-router-dom';
import { Stack, Menu, MenuItem, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import Logo from '../assets/images/Logo.png';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack direction="row" justifyContent="space-between" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px">
      <Link to="/">
        <img src={Logo} alt="logo" style={{ width: '48px', height: '48px', margin: '0px 20px' }} />
      </Link>
      <Stack
        direction="row"
        gap="40px"
        fontFamily="Alegreya"
        fontSize="24px"
        alignItems="flex-end"
      >
        <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>Home</Link>
        <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212' }}>Exercises</a>
        {/* Добавленный код для выпадающего списка */}
        <IconButton
          onClick={handleClick}
          size="large"
          edge="end"
          color="inherit"
          sx={{ ml: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            <Link to="/" style={{ textDecoration: 'none', color: '#3A1212' }}>Home</Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212' }}>Exercises</a>
          </MenuItem>
          {/* Можете добавить другие пункты меню */}
        </Menu>
      </Stack>
    </Stack>
  );
};

export default Navbar;
