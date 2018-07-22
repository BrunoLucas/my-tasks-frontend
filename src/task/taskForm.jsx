import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default class TaskForm extends React.Component {

    render(){
        return (
            <div role='form' className='taskForm'>
                <Grid cols= '12 9 10'>
                        <input id='description' className='form-control'
                            value={this.props.description}
                            onChange={this.props.handleChange}
                            placeholder = 'Acione uma tarefa'/>
                </Grid>
                <Grid cols= '12 3 2'>
                    <IconButton style='primary' icon='plus' onClick={this.props.handleAdd}/>
                </Grid>
            </div>
        )
    } 

}