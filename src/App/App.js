import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import ProductList from './components/Products/ProductList';
import Details from './components/Details/Details';
import EventList from './components/Events/EventList';
import Contact from './components/Contact/Contact';
import Modal from './components/Modal/Modal';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <React.Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/products" component={ProductList} />
            <Route path="/details" component={Details} />
            <Route path="/events" component={EventList} />
            <Route path="/contact" component={Contact} />
          </Switch>
          <Modal />
          <Footer />
        </React.Fragment>
      </div>
    );
  }
}

export default App;
