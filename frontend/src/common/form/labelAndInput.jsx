import React from 'react'

export default props => (
    <div className={props.cols}>
        <div className='form-group'>
            <label htmlFor={props.nome}>{props.label}</label>
            <input {...props.input} className='form-control'
                placeholder={props.placeholder}
                readOnly={props.readOnly} type={props.type} min={props.min} max={props.max} />
        </div>
    </div>
)