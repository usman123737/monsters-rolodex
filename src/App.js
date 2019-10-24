import React, { Component } from 'react';

import { CardList } from './component/card-list/CardList';

import { SearchBox } from './component/search-box/SearchBox';

import './app.css'


class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  async fetchData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json();
      this.setState({ monsters: data });
    } catch (error) {
      console.log(error)
    }
  }

  componentDidMount() {
    this.fetchData();
  }


  searchHandle = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state;
    // filtering search 
    const filterMontsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className='app'>
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder='Search monsters'
          handlechange={this.searchHandle}
        />
        <CardList monsters={filterMontsters} />
      </div>
    )
  }
}

export default App;