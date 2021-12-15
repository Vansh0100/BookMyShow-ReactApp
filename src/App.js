import './App.css';
import DefaultHOC from './HOC/Default.HOC';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from './pages/Home';
import MovieHOC from './HOC/MovieHOC';
import MoviePage from './pages/MoviePage';
import Plays from './pages/Plays';
import axios from "axios";
axios.defaults.baseURL="https://api.themoviedb.org/3";
axios.defaults.params={};
axios.defaults.params['api_key']=process.env.REACT_APP_API_KEY;
function App() {
  return (
    <div>
      <DefaultHOC path='/' exact component={Home}/>
      <MovieHOC path='/movie/:id' exact component={MoviePage}/>
      <DefaultHOC path="/plays" exact component={Plays}/>
    </div>
  );
}

export default App;
