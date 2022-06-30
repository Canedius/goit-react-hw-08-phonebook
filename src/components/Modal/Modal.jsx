import Form from 'components/Form/Form';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
function ModalAddForm({onClose,open}) {
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
   return <Modal
              open={open}
              onClose={onClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Form close={onClose}/>
              </Box>
            </Modal>
    
}
export default ModalAddForm
ModalAddForm.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
    
};