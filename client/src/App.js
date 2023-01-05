import './App.css';
import LandingPage from './Pages/Landing-page/landing-page.component';
import Header from './Components/Header/header.component';
import AboutUs from './Pages/About-us/aboutus.page';
import MemberSection from './Pages/Members-section/members.component';
import Footer from './Components/Footer/footer.component';
import {Route, Routes} from 'react-router-dom';
import Achievements from './Pages/Achievements-Page/achievements.component';
import SessionPage from './Pages/Sessions-page/sessionpage.component';
import BlogPage from './Pages/Blog/blog.component';
import SignUp from './Pages/SignUp/signup.component';
import SignIn from './Pages/SignIn/signin.component';

const App = () => {
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
      <Route path = '/blogs' element = {<BlogPage/>} />
      <Route path = '/signup' element = {<SignUp/>} />
      <Route path = '/signin' element = {<SignIn/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
