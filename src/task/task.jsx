
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

        this.handleRemove = this.handleRemove.bind(this)

        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)

        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)

        this.handleSearch = this.handleSearch.bind(this)

        this.handleClear = this.handleClear.bind(this)
        
        this.taskAPI = new TaskAPI();

        this.refresh();
    }
    
    handleAdd() {
    
        const description = this.state.description

        this.taskAPI.save(description).then(resp=> this.refresh())
    }

    handleChange(e) {

        console.log('handleChange')

        this.setState( { ...this.state, description : e.target.value})

    }

    handleRemove(id) {

        this.taskAPI.remove(id).then(resp=> this.refresh(this.state.description))

    }

    handleMarkAsDone(id) {

        this.taskAPI.markAsDone(id).then(resp => this.refresh(this.state.description))

    }

    handleMarkAsPending(id) {

        this.taskAPI.markAsPending(id).then(resp => this.refresh(this.state.description))

    }

    handleSearch() {
        
        this.refresh(this.state.description)

    }

    handleClear() {

        this.refresh()

    }

    refresh(description = '') {
        
        this.taskAPI.refresh(description).then( (resp) =>  this.setState({...this.state, description: description, list : resp.data}))

    }

    
    
    render() {

        return (
            <div>
                <PageHeader  name="Tarefas" small="Minhas tarefas"/>
                <TaskForm 
                    handleAdd={this.handleAdd} 
                    description = {this.state.description}
                    handleChange={this.handleChange} 
                    handleSearch={this.handleSearch} 
                    handleClear={this.handleClear} />
                <TaskList 
                    list = {this.state.list} 
                    handleRemove={this.handleRemove}
                    handleMarkAsDone = {this.handleMarkAsDone}
                    handleMarkAsPending = {this.handleMarkAsPending}/>
            </div>
        )
    }
}