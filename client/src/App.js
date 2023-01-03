import './App.css';
import LandingPage from './Pages/Landing-page/landing-page.component';
import Header from './Components/Header/header.component';
import AboutUs from './Pages/About-us/aboutus.page';
import MemberSection from './Pages/Members-section/members.component';
import Footer from './Components/Footer/footer.component';
import {Route, Routes} from 'react-router-dom';
import Achievements from './Pages/Achievements-Page/achievements.component';
import SessionPage from './Pages/Sessions-page/sessionpage.component';

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
      <Route path = '/achievements' element = {<Achievements/>} />
      <Route path = '/sessions' element = {<SessionPage/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
