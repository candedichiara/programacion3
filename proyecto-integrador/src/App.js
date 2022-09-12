import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from './screens/Home/Home'
import VerTodas from './screens/VerTodas/VerTodas';
import Favoritos from './screens/Favoritos/Favoritos'
import NotFound from './screens/NotFound/NotFound'
//import MovieDetail from './components/MovieDetail/MovieDetail';



function App() {
  return (
<React.Fragment>
<div>
      <Header />
      <Switch>
        <Route path='/' exact={true} component={Home} />
        <Route path='/todas' component ={VerTodas} />
        <Route path='/favoritos' component={Favoritos} />
        <Route path='' component={NotFound} />
        
      </Switch>
</div>
    <Footer/>
</React.Fragment>
    
  );
}

export default App;
