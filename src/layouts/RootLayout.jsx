import { Outlet } from 'react-router';
import Footer from '../pages/Home/shared/Footer/Footer';
import NavBar from '../pages/Home/shared/NavBar/NavBar';

const RootLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;