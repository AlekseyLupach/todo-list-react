import React, { Component } from 'react'
import * as Yup from 'yup';
import { Formik } from 'formik';

export default class AddListFrom extends Component {
    constructor() {
        super();

        this.validationSchema = Yup.object().shape({
            name: Yup.string().required(),
        });
    }

    render() {
        const { onSubmit } = this.props;

        return (
            <Formik initialValues={{ name: '' }}
                onSubmit={onSubmit}
                validationSchema={this.validationSchema}
            >
                {({ handleSubmit, handleChange, values }) => (
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="name"
                            placeholder="Enter list name..."
                            onChange={handleChange}
                            value={values.name}
                        />

                        <button type="submit">
                            <i className="fas fa-plus"></i>
                        </button>
                    </form>
                )}
            </Formik>
        )
    }
}
