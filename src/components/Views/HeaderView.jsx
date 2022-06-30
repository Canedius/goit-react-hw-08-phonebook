import Navigation from "components/Navigation/Navigation";
import UserMenu from "components/UserMenu/UserMenu";
import AuthNav from "components/AuthNav/AuthNav";
import { getInitialization } from "redux/contacts/contact-selectors";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import {NavLink,} from "react-router-dom"
import {Link,} from "@mui/material";
function HeaderView(params) {
    const unitialization = useSelector(getInitialization)   
    return <>   
    <Navigation>
    { unitialization && <Link sx={{ flexGrow: 18,}} color="#ffff" underline="hover" component={NavLink} to="/contacts">Contacts</Link>}
        {unitialization?<UserMenu/>:<AuthNav/>}
    </Navigation>   
    <Outlet/>
    </>
}
export default HeaderView
