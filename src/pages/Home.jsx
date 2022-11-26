import {Link} from 'react-router-dom';
import ttt from "../assets/images/ttt.png";

const Home = () => {

    return (
        <>
            <div className="home-container">
                <img className='ttt-img' src={ttt}/>
                <Link className={{textDecoration: 'none', listStyle:'none'}}
                to={'/about'}>
                    <button className='submit-btn'>Submit</button></Link>
            </div>
        </>

    )


}

export default Home
