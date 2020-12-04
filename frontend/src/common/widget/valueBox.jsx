import React from 'react'

export default props => {
    return (
        <div className={props.cols}>
            <div className={`small-box bg-${props.color}`}>
                <div className='inner'>
                    <h3>{props.value}</h3>
                    <p>{props.text}</p>
                </div>
                <div className='icon'>
                    <i className={`fa fa-${props.icon}`}></i>
                </div>
            </div>
        </div>
    )
}