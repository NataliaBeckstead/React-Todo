import React, {Component} from 'react';
import './Todo.css';

class TodoList extends Component {
    render(){
        return(
            <div className='taskContainer'>
            {this.props.data.map(datum => {
                return <p 
                        key={datum.id} 
                        onClick={e => this.props.handleClick(datum, e)}
                        >
                            {datum.task}
                        </p>
            })}
            </div>

        )
    }
}
export default TodoList;