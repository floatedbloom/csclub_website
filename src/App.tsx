import { useState } from 'react';
import Header from './Header.tsx'
import Footer from './Footer.tsx'
import MathCard from './MathCard.tsx'
import ChessCard from './ChessCard.tsx'
import CSCard from './CSCard.tsx'
import PPCard from './PingPong.tsx'
import ClubModal from './ClubModal.tsx'

function App() {
  const [selectedClub, setSelectedClub] = useState<string | null>(null);

  const handleClubClick = (topic: string) => {
    setSelectedClub(topic);
  };
  
  return (
    <div className='main-div'>
      <Header />
      <div className="content-container">
        <div className="flex-1 grid grid-cols-4 px-0 py-">
          <div onClick={() => handleClubClick('math')} className="cursor-pointer">
            <MathCard />
          </div>
          <div onClick={() => handleClubClick('chess')} className="cursor-pointer">
            <ChessCard />
          </div>
          <div onClick={() => handleClubClick('cs')} className="cursor-pointer">
            <CSCard />
          </div>
          <div onClick={() => handleClubClick('pingpong')} className="cursor-pointer">
            <PPCard />
          </div>
        </div>
      </div>
      <footer flex-shrink-0 p-4><Footer /></footer>
      <ClubModal 
          isOpen={!!selectedClub}
          onClose={() => setSelectedClub(null)}
          topic={selectedClub || ''}
        />
    </div>
  );
}

export default App