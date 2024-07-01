import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Components/Header';
import Footer from './Components/Footer';

import { Container } from 'react-bootstrap';
import HomePage from './Pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import NewsPage from './Pages/NewsPage';
import PlayersPage from './Pages/PlayersPage';
import AcademyPage from './Pages/AcademyPage';


function App() {

  return (
    <div className="App" dir='rtl'>
      <Header/>
      <Container fluid className='px-0'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/news' element={<NewsPage />} />
          <Route path='/players' element={<PlayersPage />} />
          <Route path='/academy' element={<AcademyPage />} />
        </Routes>
        
      </Container>
      <Footer/>
    </div>
    
  )
}

export default App
