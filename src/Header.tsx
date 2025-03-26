import lshsLogo from './assets/lshs.png';
import georgeLogo from './assets/george.png';
import crossLogo from './assets/cross.png';

function Header() {
  return (
    <header className="bg-white shadow-md py-6">
      <div className="flex justify-center items-center space-x-8 mb-4">
        <a
          href="https://lshs.lkstevens.wednet.edu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={lshsLogo} alt="lshs logo" className="h-12" />
        </a>
        <img src={crossLogo} alt="Cross symbol" className="h-12" />
        <a
          href="https://floatedbloom.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={georgeLogo} alt="george logo" className="h-12" />
        </a>
      </div>
      <h1 className="text-center text-4xl font-bold text-gray-800">LSHS Clubs</h1>
      <hr className="mt-4 border-t-2 border-gray-200" />
    </header>
  );
}

export default Header;