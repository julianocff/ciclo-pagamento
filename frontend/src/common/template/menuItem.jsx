import React from 'react'

export default props => (
    <a href={props.path}>
        <li className={`fa fa-${props.icon}`}>{props.label}</li>
    </a>
)