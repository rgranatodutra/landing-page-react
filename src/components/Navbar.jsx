import React from 'react';
import { AppBar, Toolbar, Box, List, ListItem, Typography, styled, ListItemButton, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import DrawerItem from './DrawerItem';
import imgLogo from '../assets/logo_infotec.png';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const ListMenu = styled(List)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const itemList = [

];

const Navbar = () => {
  return (
    <AppBar 
      component="nav" 
      position="sticky"
      sx={{ backgroundColor: '#496ca3' }}
      elevation={0}
    >
      <StyledToolbar>
        {/* Imagem da logo com estilos atualizados para responsividade */}
        <Box sx={{ display: 'flex', alignItems: 'center', marginRight: 'auto' }}>
          <img 
            src={imgLogo} 
            alt="Logo" 
            style={{ maxWidth: '150px', height: 'auto', objectFit: 'contain' }} 
          />
        </Box>
        <Typography variant="h6" component="h2">
          {/* Seu texto ou título aqui */}
        </Typography>
        <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
          <DrawerItem /> 
        </Box>
        <ListMenu>
          {itemList.map((item) => {
            const { text } = item;
            return (
              <ListItem key={text}>
                <ListItemButton component={Link} to={item.to}
                  sx={{
                    color: '#fff',
                    "&:hover": {
                      backgroundColor: 'transparent',
                      color: '#1e2a5a',
                    }
                  }}
                >
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            )
          })}
        </ListMenu>
      </StyledToolbar>
    </AppBar>
  )
}

export default Navbar;
