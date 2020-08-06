import React, { Component } from 'react';

// Components
import CardList from './components/card-list/CardList.jsx';
import SearchBox from './components/searchbox/searchbox.jsx';

import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };

    // this.handlechange = this.handlechange.bind(this);
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
    .then(users => this.setState({ monsters: users }));  
  };

  handlechange = (event) =>{
    this.setState({ searchField: event.target.value}, () => console.log(this.state)); 
  }

  render(){
    const { monsters, searchField } = this.state;
    const filtredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    
    return(
      <div className="App">
        <h1>MONSTER ROLODEX</h1>
        <SearchBox placeholder="Search Monsters" handlechange={this.handlechange}/>
        <CardList monsters={filtredMonsters} />
      </div>      
    );
  }
}

export default App;
 