import { ReactNode } from 'react';
import g3 from './assets/greg3.jpg';
import shogo from './assets/shogo.jpg';
import kel from './assets/kel.jpg';
import philip from './assets/philip.jpg';
import mani from './assets/mani.png';
import peter from './assets/peter.jpg';
import abhi from './assets/abhi.jpg';
import placeholder from './assets/nerd.jpg';


interface LeaderProps {
  role: string;
  name: string;
  photoSrc: string;
  instagramUrl: string;
}

const LeaderCard = ({ role, name, photoSrc, instagramUrl }: LeaderProps) => (
    <div className="leader-card text-center">
      <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
        <div className="w-32 h-32 mx-auto mb-2 bg-gray-200 rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity shadow-md">
          <img 
            src={photoSrc} 
            alt={`${role} - ${name}`} 
            className="w-full h-full object-cover"
          />
        </div>
      </a>
      <h3 className="font-bold text-sm">{role}</h3>
      <p className="text-sm">{name}</p>
    </div>
  );

interface ClubModalProps {
  isOpen: boolean;
  onClose: () => void;
  topic: string;
}

const ClubModal = ({ isOpen, onClose, topic }: ClubModalProps) => {
  console.log('Modal rendering', { isOpen, topic });
  if (!isOpen) return null;

  const getContent = (): ReactNode => {
    switch (topic) {
      case 'math':
        return (
          <div className="w-full">
            <h2 className="text-3xl font-bold mb-6 text-center">Math Club</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-6 justify-items-center">
              <LeaderCard
                role="President"
                name="George Lapin"
                photoSrc={g3}
                instagramUrl="https://www.instagram.com/georgelapin5/"
              />
              <LeaderCard
                role="Vice President"
                name="Shogo Yamashita"
                photoSrc={shogo}
                instagramUrl="https://www.instagram.com/shogoyamashita0702/"
              />
              <LeaderCard
                role="PR"
                name="Kelvin Ruji"
                photoSrc={kel}
                instagramUrl=""
              />
              <LeaderCard
                role="Secretary"
                name="Philip Lovelace"
                photoSrc={philip}
                instagramUrl="https://www.instagram.com/philip.lovelace/"
              />
              <LeaderCard
                role="Treasurer"
                name="John Chaffer"
                photoSrc={placeholder}
                instagramUrl=""
              />
            </div>

            <div className="club-info mb-6 text-center">
              <h3 className="font-bold text-xl mb-2">About</h3>
              <p className="text-gray-700">
                Ever since math club was founded, it's goal has been to make math as fun and accessible as possible. Although we do touch on some fields of math you've probably learned in school like Algebra and Geometry, we also cover more 
                novel and unique topics like Combinatorics and Number Theory. We value creativity and logic above all, engaging our members in problem sets, 
                group math circles, competitions, and outreach events that all aim to break the stigma of math as a memorization contest and instead reframe it
                as an endless puzzle box anyone can play with.
              </p>
            </div>
            <div className="join-info text-center">
              <h3 className="font-bold text-xl mb-2">Join !</h3>
              <p className="font-medium text-gray-700">Every Friday | 1:20 - 3:30 PM | Location: N120 (Mr. Allinson's Room)</p>
              <p className="font-medium text-gray-700">Google Classroom Code: gufhsum</p>
            </div>
          </div>
        );
      case 'chess':
        return (
          <div className="w-full text-center">
            <h2 className="text-3xl font-bold mb-6">Chess Club</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-6 justify-items-center">
              <LeaderCard
                role="President"
                name="George Lapin"
                photoSrc={g3}
                instagramUrl="https://www.instagram.com/georgelapin5/"
              />
              <LeaderCard
                role="Vice President"
                name="Andrei Sarmiento"
                photoSrc={placeholder}
                instagramUrl=""
              />
              <LeaderCard
                role="PR"
                name="Shogo Yamashita"
                photoSrc={shogo}
                instagramUrl="https://www.instagram.com/shogoyamashita0702/"
              />
              <LeaderCard
                role="Secretary"
                name="Philip Lovelace"
                photoSrc={philip}
                instagramUrl="https://www.instagram.com/philip.lovelace/"
              />
              <LeaderCard
                role="Treasurer"
                name="Manideep Gudiseva"
                photoSrc={mani}
                instagramUrl=""
              />
            </div>

            <div className="club-info mb-6 text-center">
              <h3 className="font-bold text-xl mb-2">About</h3>
              <p className="text-gray-700">
                Chess club is an inviting space for all levels of chess. Our daily meetings thrive from the interaction between differently skilled players and our goal is simply
                to eliminate the stigma painting chess as a test for geniuses; we wish to instead show how it's a fun and incredibly satisfying game that anyone can become good at.
              </p>
            </div>
            <div className="join-info text-center">
              <h3 className="font-bold text-xl mb-2">Join !</h3>
              <p className="font-medium text-gray-700">Every Monday | 2:45 - 4:00 PM | Location: E301 (Mr. White's Room)</p>
              <p className="font-medium text-gray-700">Google Classroom Code: st2ks3h</p>
            </div>
          </div>
        );
      case 'cs':
        return (
          <div className="w-full">
            <h2 className="text-3xl font-bold mb-6 text-center">Computer Science Club</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-6 justify-items-center">
              <LeaderCard
                role="President"
                name="George Lapin"
                photoSrc={g3}
                instagramUrl="https://www.instagram.com/georgelapin5/"
              />
              <LeaderCard
                role="Vice President"
                name="Manideep Gudiseva"
                photoSrc={mani}
                instagramUrl=""
              />
              <LeaderCard
                role="PR"
                name="Shogo Yamashita"
                photoSrc={shogo}
                instagramUrl="https://www.instagram.com/shogoyamashita0702/"
              />
              <LeaderCard
                role="Secretary"
                name="Philip Lovelace"
                photoSrc={philip}
                instagramUrl="https://www.instagram.com/philip.lovelace/"
              />
              <LeaderCard
                role="Treasurer"
                name="Gabriel Allinson"
                photoSrc={placeholder}
                instagramUrl=""
              />
            </div>

            <div className="club-info mb-6 text-center">
              <h3 className="font-bold text-xl mb-2">About</h3>
              <p className="text-gray-700">
                With meetings focused on interview prep where, after a short presentation introducing a concept, members have to work through difficult data structures & algorithms problems
                as they apply their knowledge. Arguably even more enriching are the various group projects which thrive from unilateral creative input and give valuable
                job-like experience coding in a team.
              </p>
            </div>
            <div className="join-info text-center">
              <h3 className="font-bold text-xl mb-2">Join !</h3>
              <p className="font-medium text-gray-700">Every Tuesday | 2:45 - 4:00 PM | Location: W134 (Mr. Gray's Room)</p>
              <p className="font-medium text-gray-700">Google Classroom Code: c7bszwj</p>
            </div>
          </div>
        );
      case 'pingpong':
        return (
          <div className="w-full text-center">
            <h2 className="text-3xl font-bold mb-6">Ping Pong Club</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-6 justify-items-center">
              <LeaderCard
                role="President"
                name="George Lapin"
                photoSrc={g3}
                instagramUrl="https://www.instagram.com/georgelapin5/"
              />
              <LeaderCard
                role="Vice President"
                name="Peter Lapin"
                photoSrc={peter}
                instagramUrl=""
              />
              <LeaderCard
                role="PR"
                name="Abhinav Bandaru"
                photoSrc={abhi}
                instagramUrl=""
              />
              <LeaderCard
                role="Secretary"
                name="Philip Lovelace"
                photoSrc={philip}
                instagramUrl="https://www.instagram.com/philip.lovelace/"
              />
              <LeaderCard
                role="Treasurer"
                name="Manideep Gudiseva"
                photoSrc={mani}
                instagramUrl=""
              />
            </div>

            <div className="club-info mb-6 text-center">
              <h3 className="font-bold text-xl mb-2">About</h3>
              <p className="text-gray-700">
                Open to all skill levels, ping pong club aims to provide a haven for ping pong players and wannabe players from around LSHS to have fun, improve, and learn from each other.
              </p>
            </div>
            <div className="join-info text-center">
              <h3 className="font-bold text-xl mb-2">Join !</h3>
              <p className="font-medium text-gray-700">Every Wednesday | 2:45 - 4:00 PM | Location: Outdoor Ping Pong Tables</p>
              <p className="font-medium text-gray-700">Google Classroom Code: ydsi4gj</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div 
        className="fixed top-0 left-0 right-0 bottom-0 bg-black/30 backdrop-blur-sm z-50"
        onClick={onClose}
      />
      <div 
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-100 p-8 rounded-xl w-4/5 h-4/5 max-w-6xl shadow-2xl z-50"
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="absolute -top-4 -right-4 bg-white text-gray-600 hover:text-gray-900 rounded-full w-8 h-8 flex items-center justify-center shadow-lg transition-colors"
        >
          ×
        </button>
        <div className="h-full overflow-y-auto pr-2">
          {getContent()}
        </div>
      </div>
    </>
  );
};

export default ClubModal; 