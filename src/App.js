import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HomePortal from './pages/HomePage';
import UserPortal from "./pages/UserPortal";
import NonprofitPortal from "./pages/NonProfitPortal";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from './pages/Login';

class App extends Component {
  render() {
    return (

        <div className="App">

        <Router>

                <div>
                <Header/>
                    <Route exact path="/" component={HomePortal} />
                    <Route path="/donate" component={UserPortal} />
                    <Route path="/About" component={About} />
                    <Route path="/Login" component={Login} />
                    <Route path="/non-profit" component={NonprofitPortal} />
                <Footer/>
                </div>


        </Router>

        </div>



    );
  }
}

export default App;
