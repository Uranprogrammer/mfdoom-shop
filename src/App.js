import logo from './logo.svg';
import './App.css';
import Navbar from './containers/Navbar/navbar';
import Main from './containers/Main/main';
import Welcome from './containers/Welcome/welcome';
import Shop from './containers/Shop/shop';
import Footer from './containers/Footer/footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/>
      <Welcome/>
      <Shop/>
      <Footer/>
    </div>
  );
}

export default App;
