  
import React, {Component} from 'react';

class TodoForm extends Component {

    render(){
        return(
            <form onSubmit={this.props.handleSubmit}>
                <input type='text' placeholder='What do you need to do?' onChange={this.props.handleChange}/>
                <input type='submit' value='Add Item' />
                <button onClick={this.props.handleRemove}>Remove Completed</button>
            </form>

        )
    }
}

export default TodoForm;