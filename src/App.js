import React from 'react';

import ToDoList from './components/TodoList';
import ToDoForm from './components/TodoForm';
import Search from './components/Search';


class App extends React.Component {

  constructor(){
    super();
    this.state={
      task: '',
      id: '',
      completed: false,
    }
  }


  data = JSON.parse(localStorage.getItem('data')) ? [...JSON.parse(localStorage.getItem('data')).slice(0)] : []
  searchData = this.data;


  handleChange = e => {
    this.setState( {
      task: e.target.value,
      id: Date.now(),
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.handleChange(e);
    this.data = [...this.data, this.state];
    this.searchData = this.data
    e.target.reset();
    localStorage.setItem('data', JSON.stringify(this.data))
  }

  handleClick = (datum, e) => {
    datum.completed = !datum.completed;
    e.target.className = datum.completed ? 'stricken' : null;
  }

  handleRemove = e => {
    this.handleChange(e);
    this.data = this.data.filter(datum => !datum.completed);
    localStorage.setItem('data', JSON.stringify(this.data))
  }

  handleSearch = e => {
    const search= e.target.value;
    //this.handleChange(e)
    this.searchData = this.data.filter(datum => datum.task.includes(search))
    console.log(this.data)
  }


  render() {
    return (
      <div>
        <h2>My ToDo List</h2>
        <div className='toDoContainer'>
          {/* <Search handleSearch={this.handleSearch}/> */}
          <ToDoList data={this.searchData} handleClick={this.handleClick}/>
          <ToDoForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} handleRemove={this.handleRemove}/>
        </div>
      </div>

    );
  }
}

export default App;