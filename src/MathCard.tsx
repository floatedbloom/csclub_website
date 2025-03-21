import mathpic from './assets/math.jpg'

function MathCard(){
    return (
        <div className="card">
            <img src={mathpic} className="card-image"></img>
            <h2 className="card-title">LSHS Math Club</h2>
            <p className="card-text">Math circles, group work, logic games, and other fun math activities !</p>
            <button className="button">More!</button>
        </div>
    );
}

export default MathCard