import s from "./RegForm.module.css"
import { useState } from 'react';
import Container from '@mui/material/Container';
import { useCreateUserMutation } from "redux/Users/users-slice";
import { TextField,Button, } from "@mui/material";
import Notiflix from 'notiflix';


export function RegForm() {
  const [createUser, ] = useCreateUserMutation()

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handelNameChange = e => {
 setName(e.currentTarget.value);};

const handelPasswordChange = e => {
    setPassword(e.currentTarget.value)};

const handelEmailChange = e => {
    setEmail(e.currentTarget.value)};
    

const handleSubmit  =  (e) => {
e.preventDefault()
reset()
createUser({name,email,password}).then(res=> {res.error?Notiflix.Notify.failure('Email address already exists'):Notiflix.Notify.info('You registered successfully');})

}

const reset = () => {
    setName('');
    setPassword('');
    setEmail('')
  };

     return  <Container>
          <form className={s.form}  onSubmit={handleSubmit}>
          <h2 >Registration page</h2>
              <TextField
                
                onChange={handelNameChange}
                value={name}
                label="Name"
                type="text"
                required
                sx={{ width: 500,mb:2}}
              />
              <TextField
                
                onChange={handelEmailChange}
                value={email}
                type="email"
                label="Email"
                required
                sx={{ width: 500,mb:2}}
              />
              <TextField
                
                onChange={handelPasswordChange}
                label="Password"
                value={password}
                type="Password"
                name="number"
                required
                sx={{ width: 500,mb:2}}
                helperText={password.length<8 && password.length>0? "Your password must include a minimum of eight characters" : "" }
                error={password.length<8 && password.length>0?true : false}
              />
              
              <Button sx={{ display: 'block' ,width:160,height:50 }}   type="submit"variant="contained">Register</Button>
          </form>
        </Container>
    
}

