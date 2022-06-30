import { lazy, Suspense } from 'react';
import {Routes, Route,} from "react-router-dom";
import Spinner from './Spinners/Spinners';


const HomeView = lazy(() =>
  import('./Views/HomeView' /* webpackChunkName: "home-view" */)
);

const RegisterView = lazy(() =>
  import('./Views/RegisterView' /* webpackChunkName: "register-view" */)
);

const LoginView = lazy(() =>
  import('./Views/LoginView' /* webpackChunkName: "login-view" */)
);

const HeaderView = lazy(() =>
  import('./Views/HeaderView' /* webpackChunkName: " Header-view" */)
);

const ContactsView = lazy(() =>
  import('./Views/ContactsView' /* webpackChunkName: "Contacts-view" */)
);


 const App =()=>{
    return <>
 <Suspense fallback={<Spinner/>}>
  <Routes>
    <Route path="/" element={<HeaderView/>}>
      <Route index element={<HomeView/>}/>
      <Route  path="/register"  element={<RegisterView/>}/>
      <Route  path="/login"  element={<LoginView/>}/>
      <Route path="/contacts" element={<ContactsView/>}/>
    </Route>
  </Routes>
</Suspense>
    </>}
export default App