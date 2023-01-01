import logo from './logo.svg';
import './App.css';
import LandingPage from './Pages/Landing-page/landing-page.component';
import Header from './Components/Header/header.component';
import AboutUs from './Pages/About-us/aboutus.page';

function App() {
  return (
    <div className="select-none">
      <Header/>
      <LandingPage/>
      <AboutUs/>
    </div>
  );
}

export default App;
