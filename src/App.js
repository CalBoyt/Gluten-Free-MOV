import 'bulma/css/bulma.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Login } from './components/auth/Login';
import { Authorized } from './components/views/Authorized';
import { NavBar } from './components/nav/NavBar';
import { ApplicationViews } from './components/views/ApplicationViews';
import { Register } from './components/auth/Register';
import Logo from './images/Logo.png'


export const App  = () => {
  return (
<BrowserRouter>
    <div className="Dashboard">
      <header className="App-header">
      <figure className="image is-50%">
      <img src={Logo} alt="Logo"></img>
      </figure>    
      <Routes>
          <Route path="/login" element={<Login />} /> 
          <Route path='/register' element={ <Register />} />         
             
          <Route path="*" element={
			      <Authorized>
				      <>
                <NavBar />
                <ApplicationViews />
					      {/* <UserViews /> */}
                
				      </>
			      </Authorized>

		      } />
      </Routes>

    </header>
   
    </div>
  </BrowserRouter>
  );

}