import {Typography,Button,Box} from "@mui/material";
import Container from '@mui/material/Container';
import {NavLink,} from "react-router-dom"
import s from "./HomePage.module.css"
import { ReactComponent as SolarImage } from '../images/solar.svg';
function HomePage(params) {
    return <Container maxWidth="xl">
    <Box sx={{ textAlign:"center"}}>
        <Typography 
                variant="h3"
                noWrap
                sx={{
                fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color : "#1976d2",
                  textDecoration: 'none'
                }}
              >
                Phonebook
              </Typography>
                
              <div className={s.thumb}>
            <SolarImage
              className={s.image}
            />
          </div>
          <Typography  sx={{mb:2 }}> Contact storage React App</Typography>
          <Button variant="contained"  
          component={NavLink} to="/contacts" >Try it now!</Button>
    </Box>
            </Container>
}
export default HomePage