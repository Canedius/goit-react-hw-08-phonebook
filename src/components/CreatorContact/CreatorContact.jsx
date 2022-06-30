import * as React from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import ModalForm from 'components/Modal/Modal';

function CreatorContact() {
        const [open, setOpen] = React.useState(false);
        const toggleModal = () => setOpen(!open);
        return (
          <>
           <Fab sx={{mr:1}} onClick={toggleModal}  color="primary" aria-label="add">
              <AddIcon />
            </Fab>
            <b>Add contact</b>
            {open && <ModalForm open={open}  onClose={toggleModal}/>}
          </>
        );
      }
    
export default CreatorContact