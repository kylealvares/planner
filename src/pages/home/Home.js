import './Home.css';
import Breadcrumbs from '../../components/Breadcrumbs';
import Modal from '../../components/Modal';

const Home = () => {
    return (
        <div className="home">
            <Breadcrumbs breadcrumbs={
                [
                    {link: "/", alias: "Dashboard"},
                    {link: "/", alias: "Dashboard"}
                ]} />
            <h1>Home</h1>
            {/* <Modal>
                <input type="text" />
                <h1>TEST</h1>
            </Modal> */}
        </div>
    );
}
 
export default Home;