import Form from './Form/Form'
import ContactList from './Contacts/Contacts'
import Filter from './Filter/Filter'
import s from './Form/Form.module.css';
import ReactDOM from "react-dom/client";
import {Routes, Route,} from "react-router-dom";
import Navigation from './Navigation/Navigation';
import RegisterView from './Views/RegisterView';
import LoginView from './Views/LoginView';
import HeaderView from './Views/HeaderView';
import ContactsView from './Views/ContactsView';
import HomeView from './Views/HomeView';


 const App =()=>{
    return (
  <Routes>
    <Route path="/" element={<HeaderView/>}>
      <Route index element={<HomeView/>}/>
      <Route  path="/register"  element={<RegisterView/>}/>
      <Route  path="/login"  element={<LoginView/>}/>
      <Route path="/contacts" element={<ContactsView/>}/>
    </Route>
  </Routes>
    )
  
}

export default App