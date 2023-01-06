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
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import AuthApi from './services/authService';
import { setCredentials } from './redux/authSlice/authSlice';

const App = () => {
  
  const [isLoading, setLoading] = useState(true)
  const {userInfo, token} = useSelector(state => state.auth)
  const dispatch = useDispatch()

  let data;

  useEffect(() =>{
    data = AuthApi({token}).then(result => {
      if(result.data.userInfo){
        dispatch(setCredentials(result.data.userInfo))
      }
      setLoading(false)
      return result.data.userInfo
    }).catch(error => {
      setLoading(false)
      console.log(error);
    })
  }, [data, dispatch])  

  return (
    <div className="select-none relative">
      {
        isLoading ? 
        <div className="fixed bg-white bg-opacity-40 h-screen w-screen flex justify-center items-center z-50">
          <div className="w-20 h-20 border-purple-700 border-t-2 animate-spin rounded-full"></div>
        </div> : null
      }
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
