
import React from 'react'
import axios from 'axios'

const URL = 'http://localhost:3000/api/all'

export default class TaskAPI extends React.Component {

    constructor(props) {

        super(props)
    }

    save(description) { 
        console.log('description ' + description)
        axios.post(URL, {description})
    }

    render() {
        return this.props.children;
    }
}

