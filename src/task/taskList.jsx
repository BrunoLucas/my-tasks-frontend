import React from 'react'
import IconButton from '../template/iconButton'

export default class TaskList extends React.Component {

    constructor(props){
    
        super(props)

    }

    renderRows(props) {
        const list = props.list || []
        return (
            list.map(task => (
                <tr key={task._id}>
                    <td className={task.done ? 'mark-as-done' : ''}>{task.description}</td>
                    <td>
                        <IconButton style='success' icon='check' hide={task.done}
                            onClick={()=>props.handleMarkAsDone(task._id)} >
                        </IconButton>
                        <IconButton style='warning' icon='undo'  hide={!task.done}
                            onClick={()=>props.handleMarkAsPending(task._id)} >
                        </IconButton>
                        <IconButton style='danger' icon='trash-o' 
                            onClick={()=>props.handleRemove(task._id)} >
                        </IconButton>
                    </td>
                </tr>
            ))
        )
    }

    render() {
        return (
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Descrição</th>
                            <th className='table-action'>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows(this.props)}
                    </tbody>
                </table>
        )
    }
}