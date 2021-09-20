import './App.css';
import './styles.css';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {BrowserRouter,Link, Switch, Route} from "react-router-dom";
import DisplayPets from './components/DisplayPets';
import CreatePet from './components/CreatePet';
import EditPet from './components/EditPet';
import DetailPet from './components/DetailPet';

function App() {

  const [listOfPets, setListOfPets] = useState([]);
  
  useEffect(()=>{
      axios.get("http://localhost:8000/api/pets")
      .then(res=>{
          setListOfPets(res.data.pets)
      })
      .catch(err=>{console.log(err)})
  },[listOfPets]);
  
  const removeFromDom = petId => {
    setListOfPets(listOfPets.filter(pet => pet._id !== petId));
  }
    
  return (
    <BrowserRouter>
      <div className="App container">
        <h1>Pet Shelter</h1>
      <Switch>
        <Route exact path="/">
          <DisplayPets listOfPets={listOfPets} />
        </Route>
        <Route exact path="/pets/new">
          <CreatePet />
        </Route>
        <Route exact path="/edit/pet/:id">
          <EditPet />
        </Route>
        <Route exact path="/pet/:id">
          <DetailPet removeFromDom={removeFromDom}/>
        </Route>
      </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;
