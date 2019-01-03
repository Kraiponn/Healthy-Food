import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import FormField from '../common/FormField';
import { productFormField } from './formField';

class ProductForm extends Component {

    renderFields(formFields) {
        return formFields.map(({ label, name, type, required }) => {
            return (
                <Field 
                    key={name}
                    label={label} 
                    name={name} 
                    type={type} 
                    required={required} 
                    component={FormField} 
                />
            )
        })
    }

    render(){
        const { onProductSubmit } = this.props;
        return (
            <div className="">
                <form onSubmit={this.props.handleSubmit(onProductSubmit)}>
                    {this.renderFields(productFormField)}
                    <button 
                        className="btn btn-block btn-success title"
                        name="submit" id="submit"
                        type="submit" >
                        บันทึก
                    </button>
                </form>
            </div>
        )
    }
}

const validate = (values) => {
    //console.log(values);
    const errors = {};
    productFormField.forEach(({name, required}) => {
        if(!values[name] && required){
            errors[name] = "กรุณากรอกชื่อสินค้าด้วยครับ"
        }
    })

    return errors;
}


const mapStateToProps = ({ products }) => {
    if(products && products.id){
        return { initialValues: products };
    }else {
        return {};
    }
}

ProductForm = reduxForm({ validate, form: 'productForm' })(ProductForm);

export default connect(mapStateToProps)(ProductForm);