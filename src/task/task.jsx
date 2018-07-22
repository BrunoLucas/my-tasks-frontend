
import React from 'react'
import PageHeader from '../template/pageHeader'
import TaskForm from './taskForm'
import TaskList from './taskList'
import TaskAPI from '../provider/TaskAPI'
import axios from 'axios'

export default class Task extends React.Component{

    constructor(props) {

        super(props)
        
        this.state = {description : '', list: []}

        this.handleAdd = this.handleAdd.bind(this)
        
        this.handleChange = this.handleChange.bind(this)
        
        this.taskAPI = new TaskAPI();
    }
    
    handleAdd() {
    
        const description = this.state.description

        this.taskAPI.save(description)
    }

    handleChange(e) {

        this.setState( { ...this.state, description : e.target.value})

    }
    
    render() {

        return (
            <div>
                <PageHeader  name="Tarefas" small="Minhas tarefas"/>
                <TaskForm handleAdd={this.handleAdd} description = {this.state.description}
                    handleChange={this.handleChange} />
                <TaskList/>
            </div>
        )
    }
}