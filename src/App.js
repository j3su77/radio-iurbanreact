import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useContext } from "react";
import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import PostDetails from "./pages/postdetails/PostDetails";
import Login from "./pages/login/Login"
import {  Context } from "./context/Context";
import './App.css';

import RadioPlayer from "./components/radio/RadioPlayer";
import EditCarousel from "./pages/settings/EditCarousel";

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <Navbar />
      < RadioPlayer />
      <Switch>

       <Route exact path="/post/:postId" component={PostDetails} />
       <Route exact path="/login" component={user ? Home : Login} />
       <Route exact path="/editcarousel" component={user ? EditCarousel : Login} />
       <Route exact path="/" component={Home} />
      </Switch>
    
      </Router>
   
  );
}

export default App;
