import { useState } from 'react';
import { useCreateContactMutation } from 'redux/contacts/contact-slice';
import { useFetchContactsQuery } from 'redux/contacts/contact-slice';
import { Box,TextField,Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Notiflix from 'notiflix';
import { useEditContactMutation } from 'redux/contacts/contact-slice';

function FormEdit({state,close}) {
const {id, name, number} = state
  const [defaultName, setDefaultName] = useState(name);
  const [defaultNumber, setDefaultNumber] = useState(number);
  const{data} = useFetchContactsQuery()
  const [editContact]= useEditContactMutation()

  const handelNameChange = e => {
    setDefaultName(e.currentTarget.value);
  };

  const handelNumberChange = e => {
    setDefaultNumber(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const flag = data.find(item => item.name === defaultName);
    if (flag) {
      Notiflix.Notify.failure(`${name} is alredy in contacts`)
    } else {
        editContact({ id, defaultName, defaultNumber })
      close()
      reset();
    }
  };

  const reset = () => {
    setDefaultName('');
    setDefaultNumber('');
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
            value={defaultName}
            type="text"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            
          />
          <TextField
           sx={{ mb: 2}}
            id="standard-basic" label="Number" variant="standard"
            onChange={handelNumberChange}
            value={defaultNumber}
            type="tel"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          />
        <Button variant="outlined" type="submit" > Update</Button>
        </Box>
      </Box>
    </>
  );
    
}

export default FormEdit