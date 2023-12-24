import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import NavBar from '../Components/NavBar/NavBar';

const Main = () => {
  return (
    <div className="container mx-auto">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
