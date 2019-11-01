import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';

import Header from './components/Header';
import AddEditProducto from './components/AddEditProducto';
import ListaProductos from './components/ListaProductos';


function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header/>
        <div className="container">
          <Switch>
            <Route exact path="/" component={ListaProductos}/>
            <Route exact path="/productos/nuevo" render = { () =>
              <AddEditProducto mensaje="Añadir nuevo producto"/>
            } />
            <Route exact path="/productos/editar/:id" component={AddEditProducto}/>
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
