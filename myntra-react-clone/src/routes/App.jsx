
import { useSelector } from "react-redux";
import Fetchitems from "../Components/Fetchitems";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import {Outlet} from "react-router-dom";
import LoadingSpinner from "../Components/LoadingSpinner"



function App() {

  
  const fetchStatus = useSelector((store) => store.fetchStatus);
  
  return (
    <>
        <Header></Header>
        <Fetchitems/>
        {fetchStatus.currentlyFetching ? <LoadingSpinner/> : <Outlet/> }
        
        <Footer></Footer>
    </>
  );
}

export default App;
