import s from "../Form/Form.module.css"
import { useState } from 'react';
import Container from '@mui/material/Container';
import { useLoginUserMutation } from "redux/Users/users-slice";
import { TextField,Button} from "@mui/material";
import { useDispatch } from "react-redux";
import { initializationUser } from "redux/contacts/contact-action";
import { tokenUser } from "redux/contacts/contact-action";
import { useNavigate } from "react-router-dom";
import Notiflix from 'notiflix';

function LoginForm() {
  const navigate = useNavigate()
const dispatch = useDispatch()
const [loginUser,] = useLoginUserMutation()
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');


const handelPasswordChange = e => {
    setPassword(e.currentTarget.value)};

const handelEmailChange = e => {
    setEmail(e.currentTarget.value)};
    

const handleSubmit = async (e) => {
e.preventDefault();
reset()
try {
  await loginUser({email,password}).then(res => {dispatch(tokenUser(res.data.token))})
  dispatch(initializationUser(true))
  navigate("/contacts")
 
} catch (error) {
  dispatch(initializationUser(false))
  Notiflix.Notify.failure('Не верный логин или пароль  ');
}
};
const reset = () => {
    setPassword('');
    setEmail('')
  };

     return  <Container>
       <form className={s.form}  onSubmit={handleSubmit}>
          <h2 >Login page</h2>
              <TextField  label="Mail" 
                onChange={handelEmailChange}
                value={email}
                type="email"
                name="email"
                sx={{ width: 500,mb:2}}
                required
              />
              <TextField id="standard-basic" label="Password" 
                onChange={handelPasswordChange}
                value={password}
                type="Password"
                name="number"
                sx={{ width: 500,mb:2}}
                required
              />
              <Button sx={{ display: 'block', width:160,height:50}}   type="submit" variant="contained">Login</Button>
          </form>
        </Container>
    
}

export default LoginForm