import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import { Avatar } from '@mui/material';
import profileImg from  '../images/profile-picture.jpg';
import { useThemeContext } from '../theme/ThemeContextProvider';



export default function Navbar() {

  const { mode, toggleColorMode } = useThemeContext();  
  console.log("mode",mode);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };


  const toggleFullscreen=()=> {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  const menuId = 'primary-search-account-menu';


  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
    sx={{"& .css-6hp17o-MuiList-root-MuiMenu-list":{
      bgcolor:`${ mode ===  "dark" && "#434446"}`
    }}}
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      
    >
      <MenuItem onClick={toggleColorMode} >
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
      >
      
      {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon sx={{color:"#303134"}}/>}

        </IconButton>
    <p style={{color:(mode === 'dark' ? "white"  : "black")}}>{`${ mode ===  "light" ? "Dark Mode"  : "Light Mode"}`}</p>
            </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
          onClick={toggleFullscreen}
        >
        <FullscreenIcon sx={{color:(mode === 'light' ? "#303134"  : "white")}}/>

        </IconButton>
        <p style={{color:(mode === 'dark' ? "white"  : "black")}}>Full Screen</p>
      </MenuItem>
    </Menu>
  );


  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='fixed' sx={{bgcolor:(mode === 'dark' ? "#303134"  : "white"),width:"85%"}}>
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' ,color:(mode === 'light' ? "#303134"  : "white")} }}
          >
            Balboa Reviewer
          </Typography>
          
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton 
            size="large"            
             aria-label="show 4 new mails"
              color="default"
              // sx={{bgcolor:"#EBEEF6",":hover ":{bgcolor:"#EBEEF6"}}}
              onClick={toggleColorMode}
            >
          
          {mode === "dark" ? <LightModeIcon sx={{color:"#EBEEF6"}}/> : <DarkModeIcon sx={{color:"#303134"}}/>}                
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="default"
              onClick={toggleFullscreen}
>

<FullscreenIcon sx={{color:(mode === 'light' ? "#303134"  : "white")}}/>            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="default"
            >
              {/* <AccountCircle /> */}
              <Avatar alt="Remy Sharp" src={profileImg} />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </Box>
  );
}