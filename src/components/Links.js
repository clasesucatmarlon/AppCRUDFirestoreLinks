import React, { useState, useEffect } from "react";
import LinkForm from "./LinkForm";

import { db } from "../firebase";

// Import from Toastify methods for create messages
import { toast } from 'react-toastify';

const Links = () => {
    const [links, setLinks] = useState([]);
    const [currentId, setCurrentId] = useState('');

    // Add or Updated element
    const addOrEdit = async (linkObject) => {
        //console.log(linkObject);
        try {
            if (currentId === '') {
                await db.collection("link").doc().set(linkObject);
                toast('The register was added in the Database !!! ', {
                    type: 'success'
                })
            } else {
                await db.collection('link').doc(currentId).update(linkObject);
                toast('The register was updated in the Database !!! ', {
                    type: 'info'
                });
                setCurrentId('');
            }
        } catch (error) {
            console.error(error);
        }
    };

    // Delete element
    const onDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete....? ')) {
            await db.collection('link').doc(id).delete();
            toast('The register was removed successfylly of the Database !!! ', {
                type: 'warning',
                autoClose: 2500
            })
        }
    }

    // Charget data
    useEffect(() => {
        getData();
    }, []);

    // Obtain all Data - onSnapshot: olways listen
    const getData = async () => {
        db.collection("link").onSnapshot((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach((doc) => {
                //console.log(doc.data());
                docs.push({ ...doc.data(), id: doc.id });
            });
            // console.log(docs);
            setLinks(docs);
        });
    };

    return (
        <>
            <div className="col-md-6 ">
                <h3 className="mt-4 mb-3 text-center text-primary font-weight-bold">
                    Manage Links
                </h3>
                <LinkForm {...{ addOrEdit, currentId, links }} />
            </div>

            <div className="col-md-5">
                <h3 className="mt-4 mb-0 text-center text-primary font-weight-bold">
                    List of Links
                </h3>
                <p className="mb-3 text-center text-primary">
                    (Total links: {links.length})
                </p>
                {links.map((item) => (
                    <div className="card mb-2 p-2" key={item.id}>

                        <div className="card-body">
                            <div className="d-flex justify-content-between ">
                                <h4>{item.name}</h4>
                                <div>
                                    <i onClick={() => onDelete(item.id)} className="material-icons text-danger">delete</i>
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    <i onClick={() => setCurrentId(item.id)} className="material-icons text-info">edit</i>
                                </div>
                            </div>
                            <p>{item.description}</p>
                            <a href={item.url} target="-blank" rel="noopener noreferrer">
                                Go to siteeb
                            </a>
                        </div>

                    </div>
                ))}
            </div>

        </>
    );
};

export default Links;
