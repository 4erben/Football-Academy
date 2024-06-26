import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import AboutUs from './Components/AboutUs'
import HeroSection from './Components/HeroSection';
import Footer from './Components/Footer';
import NewsSection from './Components/NewsSection';
import LatestVids from './Components/LatestVids';
import TalentSection from './Components/TalentSection';
import SignWithUs from './Components/SignWithUs';
import CoachesSection from './Components/CoachesSection';
import Header from './Components/Header';

function App() {

  return (
    <div className="App" dir='rtl'>
      <Header/>
      <HeroSection />
      <NewsSection />
      <AboutUs />
      <LatestVids />
      <TalentSection />
      <CoachesSection />
      <SignWithUs />
     {/*  <Footer/> */}
    </div>
    
  )
}

export default App
