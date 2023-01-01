import logo from './logo.svg';
import './App.css';
import LandingPage from './Pages/Landing-page/landing-page.component';
import Header from './Components/Header/header.component';

function App() {
  return (
    <div className="select-none">
      <Header/>
      <LandingPage/>
    </div>
  );
}

export default App;
