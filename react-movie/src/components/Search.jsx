import React, { Component } from 'react'

export default class Search extends Component {

	state = {
		search: '',
		type:'all'
	}


	handleKey = (event) => {
		if (event.key === 'Enter') {
			this.props.searchMovies(this.state.search, this.state.type)
		}
	}

	handleFilter = (event) => {
		this.setState(() => ({ type: event.target.dataset.type}), () => {
			this.props.searchMovies(this.state.search, this.state.type);
		})
		
	}


	render() {
		return (
			<div className="row">
				<div className="col s12">
					<div className="input-field">
						<input
							placeholder='Search'
							type="search"
							className="validate"
							value={this.state.search}
							onKeyDown={this.handleKey}
							onChange={(event) => this.setState({
								search: event.target.value
							})}
						/>
						<button className = 'btn' onClick ={()=>this.props.searchMovies(this.state.search, this.state.type)}>Search</button>
					</div>
				</div>

				<div>
							<p>
								<label>
									<input className="with-gap" name="group3" type="radio" checked={this.state.type ==='all'} data-type="all" onChange={this.handleFilter}
									/>
									<span>All</span>
								</label>
							</p>
							<p>
								<label>
									<input className="with-gap" checked={this.state.type ==='movie'} name="group3" type="radio" data-type="movie" onChange={this.handleFilter} />
									<span>Movies only</span>
								</label>
							</p>
							<p>
								<label>
									<input className="with-gap" name="group3" type="radio" data-type="series" checked={this.state.type ==='series'}  onChange={this.handleFilter}/>
									<span>Series only</span>
								</label>
							</p>
				</div>
			</div>
		)
	}
}
