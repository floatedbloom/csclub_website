import { Link } from 'react-router-dom';
import cspic from './assets/math.jpg'

function CSCard(){
    return (
        <div className="card">
            <img src={cspic} className="card-image"></img>
            <h2 className="card-title">LSHS CS Club</h2>
            <p className="card-text">Job interview algorithm practice and group projects !</p>
            <Link to='/cs'>
                <button className="button">More!</button>
            </Link>
        </div>
    );
}

export default CSCard