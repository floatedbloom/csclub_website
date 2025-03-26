import pppic from './assets/pp.jpg'

function PPCard(){
    return (
        <div className="card w-full max-w-sm h-full flex flex-col justify-center items-center">
            <img src={pppic} className="card-image h-40 mx-auto w-2xl" alt="Ping Pong Club"></img>
            <h2 className="card-title font-bold">LSHS Ping Pong Club</h2>
            <p className="card-text">Weekly matches and tournaments !</p>
        </div>
    );
}

export default PPCard