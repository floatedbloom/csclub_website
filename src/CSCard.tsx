import cspic from './assets/math.jpg'

function CSCard(){
    return (
        <div className="card">
            <img src={cspic} className="card-image"></img>
            <h2 className="card-title">LSHS CS Club</h2>
            <p className="card-text">Job interview algorithmic thinking in meetings, school-based projects the rest of the time</p>
            <button className="button">More!</button>
        </div>
    );
}

export default CSCard