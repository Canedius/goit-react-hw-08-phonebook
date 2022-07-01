import LoginForm from "components/LoginForm/LoginForm"
import { useSelector } from "react-redux";
import { getInitialization } from "redux/contacts/contact-selectors";
import { Navigate } from "react-router-dom";
function LoginView(params) {
    const initialization = useSelector(getInitialization)
    if (initialization) {
        return <Navigate to ="/contacts"/>
    }
    return <LoginForm/>
}
export default LoginView