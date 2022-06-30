import { useState } from 'react';
import PropTypes from 'prop-types';
import { useCreateContactMutation } from 'redux/contacts/contact-slice';
import { useFetchContactsQuery } from 'redux/contacts/contact-slice';
import { Box,TextField,Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Notiflix from 'notiflix';
export const Form = ({close}) => {
  const{data} = useFetchContactsQuery()
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const [createContacts] = useCreateContactMutation()

  const handelNameChange = e => {
    setName(e.currentTarget.value);
  };

  const handelNumberChange = e => {
    setNumber(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const flag = data.find(item => item.name === name);
    if (flag) {
      Notiflix.Notify.failure(`${name} is alredy in contacts`)
    } else {
      createContacts({  name, number })
      close()
      reset();
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <Box component="form" 
      sx={{
        borderRadius: '16px',
        p:2,
        width: 300,
        height: 170,
        backgroundColor: 'primary.main',
        '&:hover': {
          backgroundColor: 'primary.dark' ,
        },
      }} 
         onSubmit={handleSubmit}>
          <Box  sx={{ backgroundColor: "#ffff",
          borderRadius: '16px',
          display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: 170,
        }}>
          <TextField
            id="standard-basic" label="Name" variant="standard"
            onChange={handelNameChange}
            value={name}
            type="text"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
          />
          <TextField
           sx={{ mb: 2}}
            id="standard-basic" label="Number" variant="standard"
            onChange={handelNumberChange}
            value={number}
            type="tel"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            required
          />
        <Button variant="outlined" type="submit" endIcon={<SendIcon />}> add contact</Button>
        </Box>
      </Box>
    </>
  );
};



export default Form;

Form.propTypes = {
  close: PropTypes.func,
};