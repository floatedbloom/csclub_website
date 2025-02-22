import lshsLogo from './assets/lshs.png'
import georgeLogo from './assets/george.png'
import crossLogo from './assets/cross.png'

function Header(){
    return (
        <header>
            <div className="center-items">
                <a href="https://lshs.lkstevens.wednet.edu/" target="_blank">
                <img src={lshsLogo} className="header-image" alt="lshs logo"/>
                </a>
                <img src={crossLogo} className="header-image" alt="Cross symbol"/>
                <a href="https://floatedbloom.netlify.app" target="_blank">
                <img src={georgeLogo} className="header-image" alt="george logo" />
                </a>
            </div>
            
            <h1 style={{textAlign: 'center'}}>George's LSHS STEM Clubs</h1>
            <hr></hr>
        </header>
    );
}

export default Header