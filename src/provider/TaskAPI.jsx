
import React from 'react'
import axios from 'axios'

const URL = 'http://localhost:3000/api/tasks'

export default class TaskAPI extends React.Component {

    constructor(props) {

        super(props)
    }

    save(description) { 

        return axios.post(URL, {description})

    }

     refresh(description) {

        const search = description ? `&description__regex=/${description}/` : ''

        return axios.get(`${URL}?sort=createAt${search}`)

    }

    remove(id) {

        return axios.delete(`${URL}/${id}`)

    }

    markAsDone(id) {

        return axios.put(`${URL}/${id}`, {done: true})

    }

    markAsPending(id) {

        return axios.put(`${URL}/${id}`, {done: false})

    }

    render() {

        return this.props.children;

    }
}

