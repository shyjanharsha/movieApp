import React from 'react';
import unirest from 'unirest';

class Search extends React.Component {
	constructor(props) {
  		super(props);
  		this.state= {
       		title: '',
   		}
  		this.handleSubmit = this.handleSubmit.bind(this);
  		this.handleInputTitle = this.handleInputTitle.bind(this);
	}

	
   	handleSubmit = () => {
    	const {title} = this.state;
      	this.setState({title: ''})
   	}
   	handleInputTitle = (event) => {
    	event.preventDefault();
       	const title = event.target.value;
       	this.setState({title});
   	}
   	render() {
       	const {title} = this.state;
       	return (
        	<div className="search">
            	<input className="search-box" type="text" onChange={this.handleInputTitle} value={title}/>
            	<input className="button" type="submit" onClick={this.handleSubmit} value="Search"/>
           	</div>
       	)
   	}
}
export default Search;