import cspic from './assets/csclub.jpg'

function CSCard(){
    return (
        <div className="card">
            <img src={cspic} className="card-image" alt="CS Club"></img>
            <h2 className="card-title font-bold">LSHS CS Club</h2>
            <p className="card-text">Programming projects, competitions, and learning !</p>
        </div>
    );
}

export default CSCard