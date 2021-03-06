
import Contacts from "components/Contacts/Contacts"
import Filter from "components/Filter/Filter"
import Container from '@mui/material/Container';
import { useSelector } from "react-redux";
import { getInitialization } from "redux/contacts/contact-selectors";
import { Navigate } from "react-router-dom";
import –°reateContact from "components/CreatorContact/CreatorContact";
function ContactsView(params) {

    const initialization = useSelector(getInitialization)
    if (!initialization) {
        return <Navigate to ="/login"/>
       
    }
    return <Container>
             <Filter/>
             < –°reateContact/>
             <Contacts/>
           </Container>
    
}
export default ContactsView