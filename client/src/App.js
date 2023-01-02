import './App.css';
import LandingPage from './Pages/Landing-page/landing-page.component';
import Header from './Components/Header/header.component';
import AboutUs from './Pages/About-us/aboutus.page';
import MemberSection from './Pages/Members-section/members.component';
import Footer from './Components/Footer/footer.component';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="select-none relative">
      <Header/>
      <Routes>
      <Route path = '/' element = {
      <div>
        <LandingPage/>
        <AboutUs/>
        <MemberSection/>
      </div>
      } 
      />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
