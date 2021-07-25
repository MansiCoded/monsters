import {Component} from 'react';
import { CardList } from './components/card-lists/card-list.component';
import './App.css';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters : [],
      searchField: '',
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json()
    .then(users => this.setState({monsters:users})));
  }

  handleChange = e => {
    this.setState({searchField:e.target.value});
  }

  render(){
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monst => 
      monst.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder= 'Search Monster' handleChange={this.handleChange}></SearchBox>
        <CardList monsters = {filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
