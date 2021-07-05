
import React, { Component } from 'react';
import  Movies  from '../components/Movie';
 
 
class Main extends Component {
	state = {
		movies:[]
	}

	componentDidMount(){
		fetch('http://www.omdbapi.com/?apikey=78584b3c&s=matrix')
			.then(response=>response.json())
			.then(data=>this.setState({movies:data.Search}))
			
	}

	render(){
		const { movies } = this.state;
		return(
			<main className='container content'>
				{
					movies.length ? (
						<Movies movies={this.state.movies}/>
					) : <h5>Loading...</h5>
				}
			</main>
		)
	}
}
 export default Main;
