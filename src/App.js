import React, {Component} from 'react';
import './App.scss';
import SearchForm from './components/SearchForm/SearchForm';
import ImageContainer from "./components/ImagesContainer/ImagesContainer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: []
    }
    this.savePredefinedUrls = this.savePredefinedUrls.bind(this);
  }
  savePredefinedUrls (urls) {    
    this.setState({ urls });
  }
  render () {
    const { urls } = this.state;
    return (
      <div className="App">
        <SearchForm saveUrls = {this.savePredefinedUrls}/>
        <ImageContainer urls ={urls}/>
      </div>
    );
  }
}

export default App;
