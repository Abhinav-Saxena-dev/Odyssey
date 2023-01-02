import './App.css';
import LandingPage from './Pages/Landing-page/landing-page.component';
import Header from './Components/Header/header.component';
import AboutUs from './Pages/About-us/aboutus.page';
import MemberSection from './Pages/Members-section/members.component';

function App() {
  return (
    <div className="select-none relative">
      <Header/>
      <LandingPage/>
      <AboutUs/>
      <MemberSection/>
    </div>
  );
}

export default App;
