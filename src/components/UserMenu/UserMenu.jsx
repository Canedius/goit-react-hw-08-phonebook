import {IconButton,MenuItem,Menu, Box,Button,Avatar,Tooltip } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { initializationUser } from "redux/contacts/contact-action";


function UserMenu() {
  const dispatch = useDispatch()
  const [anchorEl, setAnchorEl] = useState(null)
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = async () => {
    setAnchorEl(null);

  };
    return<Box>
    <Tooltip title="Open settings">
    <IconButton sx={{ flexGrow: 1}} onClick={handleMenu} color="inherit">
      <Avatar/>
     </IconButton>
     </Tooltip>     
     <Menu
            sx={{ mt: '45px' }} 
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem key="Logout" onClick={handleClose}> 
          <Button textalign="center" onClick={() => dispatch((initializationUser(false)))}>Logout</Button>
          </MenuItem> 
        </Menu>
     </Box>
}
export default UserMenu
