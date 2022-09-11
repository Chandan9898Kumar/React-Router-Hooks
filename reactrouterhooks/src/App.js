import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavLinks from './NavLinks';
import ContactPage from './Components/Contact';
import AboutPage from './Components/About';
import LoginPage from './Components/Login';
import ProfilePage from './Components/Profile'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route   exact path='/'  element={<NavLinks />}/>
        <Route   exact path='/Contact'  element={<ContactPage />}/>
        <Route   exact path='/About'  element={<AboutPage />}/>
        <Route   exact path='/Login'  element={<LoginPage />}/>
        <Route   exact path='/Profile/:input'  element={<ProfilePage name="Aston" />}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
