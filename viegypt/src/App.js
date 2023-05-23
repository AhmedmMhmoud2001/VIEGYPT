import './App.css';
import Header from './components/header/Header';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
function App() {
  return (
    <Router className="App">
      <Header/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Home" element={<Home/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
