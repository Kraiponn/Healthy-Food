import React from 'react';

export default ({ input, label, type, name, required }) => {
    return (
        <div className="form-group">
            <label className="title">{label}</label>
            <input className="form-control" type={type} name={name} {...input} required={required} />
        </div>
    )
}