import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from './screens/Home/Home'
import AllMovies from './screens/AllMovies/AllMovies';
import AllSeries from './screens/AllSeries/AllSeries'
import Favoritos from './screens/Favoritos/Favoritos'
import MovieDetail from './components/MovieDetail/MovieDetail';
import SerieDetail from './components/SerieDetail/SerieDetail';
import NotFound from './screens/NotFound/NotFound'




function App() {
  return (
<React.Fragment>
<div>
      <Header />
      <Switch>
        <Route path='/' exact={true} component={Home} />
        <Route path='/todasPeliculas' component ={AllMovies} />
        <Route path='/todasSeries' component={AllSeries} />
        <Route path='/favoritos' component={Favoritos} />
        <Route path='/detalle/:id' component = {MovieDetail} />
        <Route path='/detalleSerie/:id' component= {SerieDetail} />
        <Route path='' component={NotFound} />
        
      </Switch>
</div>
    <Footer/>
</React.Fragment>
    
  );
}

export default App;
