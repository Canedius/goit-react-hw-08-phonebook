import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import {Typography,} from "@mui/material";
import Container from '@mui/material/Container';
import {NavLink,} from "react-router-dom"
;

function Navigation({children}) {
    return<>
    <AppBar position="static" component="nav" sx={{mb:10}}>
    <Container maxWidth="xl">
        <Toolbar disableGutters  >
        <Typography 
            variant="h6"
            noWrap
            component={NavLink}
            to="/"
            sx={{
              flexGrow: 1,
              mr:1,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
                
            }}
          >
            Phonebook
          </Typography>

        {children}
         
        </Toolbar>
    </Container>
    </AppBar>
    </>
    
}

export default Navigation