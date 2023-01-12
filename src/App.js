import './App.css';
import React from 'react'
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import RowPost from './Components/RowPost/RowPost';
import {action, tv_movie} from './urls'
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={tv_movie} title='Tv Shows'/>
      <RowPost url={action} title='Action' isSmall/>
    </div>
  );
}

export default App;
