import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import HomePortal from './pages/HomePage';
import UserPortal from "./pages/UserPortal";
import NonprofitPortal from "./pages/NonProfitPortal";
import About from "./pages/About";
import Header from "./components/Header";
import Login from './components/Login';
import Register from './components/Register';
import ReservationPortal from './pages/ReservationPortal';
import PrivateRoute from './components/PrivateRoute';

class App extends Component {
  render() {
    return (

        <div className="App">

        <Router>

                <div>
                <Header/>

                    <Route exact path="/" component={HomePortal} />
                    <Route path="/donate" component={UserPortal} />
                    <Route path="/about" component={About} />
                    <Route path="/login" component={Login} />
                    <Route  path="/register" component={Register} />
                    <PrivateRoute path="/non-profit" component={NonprofitPortal} />
                    <PrivateRoute path="/reservation" component={ReservationPortal} />


                </div>


        </Router>

        </div>



    );
  }
}

export default App;
