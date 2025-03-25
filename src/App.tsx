import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './Header.tsx'
import Footer from './Footer.tsx'
import MathCard from './MathCard.tsx'
import ChessCard from './ChessCard.tsx'
import CSCard from './CSCard.tsx'
import PPCard from './PingPong.tsx'
import DetailsPage from './DetailsPage.tsx';

function App() {
  return (
    <Router>
      <div className='main-div'>
        <Header></Header>
        <Routes>
          <Route path='/' element={
            <div className="center-items">
              <MathCard></MathCard>
              <ChessCard></ChessCard>
              <CSCard></CSCard>
              <PPCard></PPCard>
            </div>
          }/>
          <Route path='/math' element={<DetailsPage topic='math'/>}/>
          <Route path='/chess' element={<DetailsPage topic='chess'/>}/>
          <Route path='/cs' element={<DetailsPage topic='cs'/>}/>
          <Route path='/pingpong' element={<DetailsPage topic='pingpong'/>}/>
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  )
}

export default App
