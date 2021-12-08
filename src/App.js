import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useContext } from "react";
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ScrollUpButton from './components/ScrollUpButton';
import Home from './pages/home/Home';
import PostDetails from "./pages/postdetails/PostDetails";
import Login from "./pages/login/Login"
import {  Context } from "./context/Context";
import './App.css';

import AudioPlayer from "./components/radio/AudioPlayer";
import Setting from "./pages/settings/Setting";

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <Navbar />
      < AudioPlayer />
      <Switch>

       <Route exact path="/post/:postId" component={PostDetails} />
       <Route exact path="/login" component={user ? Home : Login} />
       <Route exact path="/setting" component={user ? Setting : Login} />
       <Route exact path="/" component={Home} />
      </Switch>
    
      </Router>
   
  );
}

export default App;
