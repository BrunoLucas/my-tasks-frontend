import React from 'react'

export default props => {
    
    if (props.test) {
        console.log('props.test ' + props.test);
        return props.children
    } else {
        console.log('props.test ' + props.test);
        return false
    }
}
