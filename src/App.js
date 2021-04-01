import React from "react"
import './App.css';

// load components
import TableauEmbed from './components/TableauEmbed'

function App() {
  return (
    <div className="App">
      <h1>Business impacts of COVID-19 data</h1>
      <h2>Released 7th May 2020</h2>
      <h3>Author: Bianca Corbu</h3>
      <TableauEmbed tyle={{textAlign: "center"}}/>
    </div>
  );
}

export default App;
 
