import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from './screens/Home/Home'
import Favoritos from './screens/Favoritos/Favoritos'
import NotFound from './screens/NotFound/NotFound'
//import MovieDetail from './components/MovieDetail/MovieDetail';
import VerTodas from './screens/VerTodas/VerTodas';

function App() {
  return (
<React.Fragment>
<div>
      <Header />
      <Switch>
        <Route path='/' exact={true} component={Home} />
        <Route path='/favoritos' component={Favoritos} />
        <Route component={NotFound} />
        <Route path='/todas' component ={VerTodas} />
      </Switch>
</div>
    <Footer/>
</React.Fragment>
    
  );
}

export default App;
