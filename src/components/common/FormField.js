import React from 'react';

export default ({ input, label, type, name, required, meta: {error, touched} }) => {
    //console.log(meta);
    return (
        <div className="form-group">
            <label className="title">{label}</label>
            <input className="form-control" type={type} name={name} {...input} required={required} />
            { error && touched &&
                (
                    <div className="text-danger title mt-2">{error}</div>
                ) 
            }
        </div>
    )
}