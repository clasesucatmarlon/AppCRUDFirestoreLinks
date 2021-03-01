import React, { useState, useEffect } from "react";
import { db } from "../firebase";

// Import from Toastify methods for create messages
import { toast } from 'react-toastify';


const LinkForm = (props) => {

    const initialStateValues = {
        url: '',
        name: '',
        description: ''
    }

    const [values, setValues] = useState(initialStateValues);

    // Every time something is written the status is updated
    const handleInputChange = (event) => {
        //console.log(event.target.value);
        const { name, value } = event.target;  // from event take name and value
        // console.log(name, value);

        setValues({ ...values, [name]: value })
    }

    // Validate url
    const validateURL = (str) => {
        return /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(str);
    }


    // Handle click on button Save
    const handleSubmit = (event) => {
        event.preventDefault();
        //console.log(values);

        if (!validateURL(values.url)) {
            return toast('Incorrect URL, please change it!!! ', {
                type: 'warning',
                autoClose: 2000,
            });
        } 

        props.addOrEdit(values);
        setValues({ ...initialStateValues });
    }

    // Obtain element by Id
    const getById = async (id) => {
        const doc = await db.collection('link').doc(id).get();
        // console.log(doc.data());
        setValues({ ...doc.data() })
    }


    // Check for id 
    useEffect(() => {
        if (props.currentId === '') {
            setValues({ ...initialStateValues });
        } else {
            getById(props.currentId);
        }

    }, [props.currentId])

    return (
        <form className="card card-body shadows-all" onSubmit={handleSubmit}>
            <div className="form-group input-group">
                <div className="input-group-text bg-primary">
                    <i className="material-icons">insert_link</i>
                </div>
                <input
                    onChange={handleInputChange}
                    type="text"
                    className="form-control"
                    placeholder="https://someurl.com"
                    name="url"
                    value={values.url}
                />
            </div>

            <div className="form-group input-group">
                <div className="input-group-text bg-primary">
                    <i className="material-icons">create</i>
                </div>
                <input
                    onChange={handleInputChange}
                    type="text"
                    className="form-control"
                    placeholder="Website name"
                    name="name"
                    value={values.name}
                />
            </div>

            <div className="form-group">
                <textarea
                    onChange={handleInputChange}
                    name="description"
                    className="form-control"
                    placeholder="write a description"
                    rows="3"
                    value={values.description}
                >
                </textarea>
            </div>

            <button className="btn btn-primary btn-block">
                {props.currentId === '' ? 'Save' : 'Update'}
            </button>

        </form>
    );
};

export default LinkForm;
