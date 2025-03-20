import chesspic from './assets/pp.jpg'

function PPCard(){
    return (
        <div className="card">
            <img src={chesspic} className="card-image"></img>
            <h2 className="card-title">LSHS Ping Pong Club</h2>
            <p className="card-text">Come have fun playing ping pong, no experience required !</p>
            <button className="button">More!</button>
        </div>
    );
}

export default PPCard