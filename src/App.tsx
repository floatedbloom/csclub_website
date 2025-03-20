import Header from './Header.tsx'
import Footer from './Footer.tsx'
import MathCard from './MathCard.tsx'
import ChessCard from './ChessCard.tsx'
import CSCard from './CSCard.tsx'
import PPCard from './PingPong.tsx'


function App() {
  return (
    <div className='main-div'>
      <Header></Header>
      <div className="center-items">
        <MathCard></MathCard>
        <ChessCard></ChessCard>
        <CSCard></CSCard>
        <PPCard></PPCard>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App
