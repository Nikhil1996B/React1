import React, { Component } from 'react';
import NamesList from './components/NamesList'
import './App.css';
import Credit from './components/Credit'
import Search from './components/Search'
import ShortList from './components/ShortList'
class App extends Component {

constructor(props)
{
super(props)
this.state={
  filterText: '',
  favourites: []
}
}
addFavourite(id){
const favList= this.state.favourites.concat([id])
this.setState({
  favourites: favList
})
}

  filterUpdate(value){
    this.setState({
      filterText:value
    })
  }
  render() {
    return(
      <main>
      <div>
        <Search 
        filterText= {this.state.filterText}
        filterUpdate={this.filterUpdate.bind(this)}/>
        <ShortList
        favourites={this.state.favourites}
        data={this.props.data}
        />
        <NamesList
         data={this.props.data}
         filterText={this.state.filterText}
        addFavourite={this.addFavourite.bind(this)}/>
        <Credit/>
        
      </div>
      </main>
    )
  }
}

export default App;
