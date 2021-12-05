
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ScrollUpButton from './components/ScrollUpButton';
import Home from './pages/home/Home';
import AudioPlayer from "./components/radio/AudioPlayer";
function App() {
  return (
    <div >
      <Navbar />
      < AudioPlayer />
      <Home />


      <Footer />

      < ScrollUpButton />
    </div>
  );
}

export default App;
