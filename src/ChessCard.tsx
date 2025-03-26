import chesspic from './assets/chess.jpg'

function ChessCard(){
    return (
        <div className="card">
            <img src={chesspic} className="card-image" alt="Chess Club"></img>
            <h2 className="card-title font-bold">LSHS Chess Club</h2>
            <p className="card-text">Weekly meetings, tournaments, and casual play !</p>
        </div>
    );
}

export default ChessCard