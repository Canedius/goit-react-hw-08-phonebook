import { RegForm } from "components/RegForm/RegForm"
import { useSelector } from "react-redux";
import { getInitialization } from "redux/contacts/contact-selectors";
import { Navigate } from "react-router-dom";
function RegisterView(params) {
    const initialization = useSelector(getInitialization)
    if (initialization) {
        return <Navigate to ="/contacts"/>
    }  
    return <RegForm/>
}

export default RegisterView