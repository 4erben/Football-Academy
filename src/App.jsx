import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Components/Header';
import Footer from './Components/Footer';

import { Container } from 'react-bootstrap';
import HomePage from './Pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import PlayersPage from './Pages/PlayerDetailsPage';
import AcademyPage from './Pages/AcademyPage';
import YoungPlayers from './Pages/YoungPlayersPage';
import AmateurPlayers from './Pages/AmatuerPlayersPage';


function App() {

  return (
    <div className="App" dir='rtl'>
      <Header/>
      <Container fluid className='px-0'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/youngPlayers' element={<YoungPlayers />} />
          <Route path='/amateurPlayers' element={<AmateurPlayers />} />
          <Route path='/details' element={<PlayersPage />} />
          <Route path='/latestNews' element={<AcademyPage />} />
        </Routes>
        
      </Container>
      <Footer/>
    </div>
    
  )
}

export default App
