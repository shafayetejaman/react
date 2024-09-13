import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/NavBar/NavBar';
import APIProvider from './context/api/api';
import Card from './components/Card/Card';


function App()
{

  return (
    <>
      <APIProvider>
        <Navbar></Navbar>
        <Card></Card>
      </APIProvider>
      <Footer></Footer>
    </>
  );
}

export default App;
