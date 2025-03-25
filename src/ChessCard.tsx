import chesspic from './assets/chess.jpg'
import {Link} from 'react-router-dom'

function ChessCard(){
    return (
        <div className="card">
            <img src={chesspic} className="card-image"></img>
            <h2 className="card-title">LSHS Chess Club</h2>
            <p className="card-text">Engaging competition and endless improvement, anyone is welcome !</p>
            <Link to='/chess'>
                <button className="button">More!</button>
            </Link>
        </div>
    );
}

export default ChessCard