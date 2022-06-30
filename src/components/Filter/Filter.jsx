import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/contacts/contact-action';
import { useSelector } from 'react-redux'
import {getFilter } from 'redux/contacts/contact-selectors';
import { TextField } from '@mui/material';

function Filter() {
  const dispatch = useDispatch()
  const filter = useSelector(getFilter)
  return (
      <TextField
      sx={{
        mb:2,
        width: 310,
        maxWidth: '100%',
        display: 'block',
        
      }}
        label="Find contacts by name"
        fullWidth
        tupe="text"
        value={filter}
        onChange={(e)=>dispatch(filterContact(e))}
      />
  );
}

Filter.propTypes = {
  filter: PropTypes.string,
  changeFilter:PropTypes.func
};

export default Filter;
