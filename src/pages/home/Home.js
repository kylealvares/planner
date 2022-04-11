import './Home.css';
import Modal from '../../components/Modal';

const Home = () => {
    return (
        <div className="home">
            <h1>Home</h1>
            <input type="text" placeholder='Search' />
            {/* <Modal>
                <input type="text" />
                <h1>TEST</h1>
            </Modal> */}
        </div>
    );
}
 
export default Home;