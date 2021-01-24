import React from 'react';
import unirest from 'unirest';
import Search from './Search.js';
import Movie from './movie.js';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
     movies: []
    }
    console.log(this.state)
    // this.sendRequest = this.sendRequest.bind(this)
  }
  sendRequest = (title) => {
    const req = unirest("GET", "https://movie-database-imdb-alternative.p.rapidapi.com/");
    req.query({
      "page": "1",
      "r": "json",
      "s": title
    });
    req.headers({
      "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
      "x-rapidapi-key": "2cbf81db82mshb29bf29b4d10558p1c1ae6jsnfd00daefa145"
    });
    
    req.end((res) => {
      if (res.error) throw new Error(res.error);
      const movies = res.body.Search;
      this.setState({movies},()=>{
        this.showname()
      })
    });
  }
  showname(){
    this.state.movies.map((movie) => {
            return <Movie {...movie}/>
          })
  }
  

  render() {
    return (
      <div className="App">
        <Search handleSendRequest={this.sendRequest}/>

        <header className="App-header">
          {
            this.showname()
        }
        </header>
      </div>
    );
  }
}
export default App;