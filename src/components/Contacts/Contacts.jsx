import PropTypes from 'prop-types';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useFetchContactsQuery } from 'redux/contacts/contact-slice';
import s from '../Form/Form.module.css';
import { useDeleteContactMutation } from 'redux/contacts/contact-slice';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/contacts/contact-selectors';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';
import DeleteIcon from '@mui/icons-material/Delete';
import Badge from '@mui/material/Badge';
import { Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';

import FormEdit from 'components/FormEdit/FormEdit';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function Contacts({ children }) {
  const [state,setState]=useState("")
  const filter = useSelector(getFilter);
  const { data } = useFetchContactsQuery();
  const normalizedFilter = filter.toLowerCase();
  const [open, setOpen] = useState(false);
  const toggleModal = (data) => {
    setState(data)
    setOpen(!open)};



  
  const visibleContacts =
    data &&
    data.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      bgcolor: 'background.paper',
      boxShadow: 24,
      borderRadius: '16px',
      p: 1,
    }
  const [deleteContact] = useDeleteContactMutation();

  return (
    data && (
      <div className={s.wrap}>
        <Typography variant="h4" 
         >
       Contacts list
       <Badge  sx={{ ml: 1}} badgeContent={data.length ||"0"} color="primary">
          <PersonIcon color="action" />
        </Badge>
     </Typography>
        
        {children}
        <List>
          {visibleContacts.map(({ id, name, number }) => {
            return (
              <ListItem key={id} sx={{border: 1,borderColor: 'grey.500', mb:1, display: 'flex',justifyContent: 'space-between'}} >
                <AccountCircleIcon fontSize="large" color="action"/>
                <span>
                  {name}: {number}
                </span>
              <Box>
                <IconButton onClick={()=>toggleModal({ id, name, number })} edge="end" >
                  <EditIcon  />
                </IconButton> 
                <IconButton onClick={() => deleteContact(id)} edge="end" aria-label="delete">
                  <DeleteIcon  />
                </IconButton>
                </Box> 
                <Modal
                 open={open}
                 onClose={toggleModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <FormEdit state={state} close={toggleModal}/>
              </Box>
            </Modal>
              </ListItem>
            );
          })}
        </List>
        
      </div>
    )
  );
}
Contacts.propTypes = {
  children: PropTypes.node,
};

export default Contacts;

