import { useEffect, useState } from 'react';
import ShowDetail from './ShowDetail';
import './App.css';

function App() {
  const [shows, setShows] = useState([]);
  const [selectedShow,setSelectedShow] = useState(null);
  const [akas, setAkas] = useState ([]);
  
  useEffect(() => {
    fetch("https://api.tvmaze.com/shows?page=1")
      .then(response => response.json())
      .then(data => setShows(data));
  },[])

  const handleImageClick = (show) =>{
    setSelectedShow(show);
    fetch(`https://api.tvmaze.com/shows/${show.id}/akas`)
     .then(response => response.json())
     .then(akas => setAkas(akas));
  }

 
  
  return (
    <div className="App">
      <h1>Look at these TV shows!</h1>
      {shows.map((show) => (
        <div key={show.id}>
          <h3 className="title">{show.name} on Click={()=> handleImageClick(show)}</h3>
          <img src={show.image.medium} alt={show.name} onClick={()=> handleImageClick(show)} />
           {selectedShow && selectedShow.id === show.id &&(<ShowDetail type= {selectedShow.type} status= {selectedShow.status} akas={akas} />
           )}
        </div>
      ))}
    </div>
  );
}



export default App;
