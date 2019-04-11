import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './theme';

class App extends Component {
  render() {
    return (
       <BrowserRouter>
          <MuiThemeProvider theme={theme}>
          <div className="App">
            <Navbar/>
              <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route path="/cart" component={Cart}/>
                </Switch>
           </div>
          </MuiThemeProvider>
       </BrowserRouter>
      
    );
  }
}

export default App;
