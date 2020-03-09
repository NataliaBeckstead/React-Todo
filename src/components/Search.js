import React, {Component} from 'react';

class Search extends Component {
    render(){
        return(
            <input type='text' placeholder='Search...' onChange={this.props.handleSearch} />
        )
    }
}

export default Search;