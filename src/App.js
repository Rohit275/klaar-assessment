import './App.css';
import React, { useState} from 'react';
import Selector from './components/citySelector';
import Tables from './components/Table'

function App() {
  const [city, setCity] = useState("BANGALORE");
  return (
    <div className="App">
      <h1>Bank Search Application</h1>
      <div className="cmpn">
        <div className="select">
          <Selector city={city} setCity={setCity} />
        </div>
        <br></br>
        <Tables city={city}  />
      </div>
    </div>
  );
}


export default App;
