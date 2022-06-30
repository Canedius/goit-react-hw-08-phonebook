import {NavLink,} from "react-router-dom"
import {Link,} from "@mui/material";


function AuthNav() {
    return<>
          <Link sx={{ mr: 2 }}  color="#ffff" underline="hover" component={NavLink} to="/register">Register</Link>
          <Link sx={{ mr: 2 }}  color="#ffff" underline="hover" component={NavLink} to="/login">Login</Link>
          </> 
}

export default AuthNav