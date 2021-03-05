import React, { useState, useEffect } from "react";
import LinkForm from "./LinkForm";

import { db } from "../firebase";

import "../App.css";
// Import from Toastify methods for create messages
import { toast } from "react-toastify";

const Links = () => {
    const [links, setLinks] = useState([]);
    const [currentId, setCurrentId] = useState("");

    // Add or Updated element
    const addOrEdit = async (linkObject) => {
        //console.log(linkObject);
        try {
            if (currentId === "") {
                await db.collection("link").doc().set(linkObject);
                toast("The register was added in the Database !!! ", {
                    type: "success",
                });
            } else {
                await db.collection("link").doc(currentId).update(linkObject);
                toast("The register was updated in the Database !!! ", {
                    type: "info",
                });
                setCurrentId("");
            }
        } catch (error) {
            console.error(error);
        }
    };

    // Delete element
    const onDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete....? ")) {
            await db.collection("link").doc(id).delete();
            toast("The register was removed successfully of the Database !!! ", {
                type: "warning",
                autoClose: 2500,
            });
        }
    };

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
            <div className="col-12 bg-secondary">
                <div className="col-12 col-md-6  ml-auto mr-auto">
                    <h3 className="mt-2 mb-4 text-center text-warning font-weight-bold">
                        Manage Links
                    </h3>
                    <LinkForm {...{ addOrEdit, currentId, links }} />
                </div>
            <div className="border-divided py-4 ml-auto mr-auto mb-5"></div>
            <div className="col-md-12">
                <h3 className="mt-4 mb-0 text-center text-warning font-weight-bold">
                    List of Links
                </h3>
                <p className="mb-4 text-center text-warning ">
                    (Total links: {links.length})
                </p>
            </div>
            </div>



            <div className="d-flex flex-wrap justify-content-around p-3"> 
            {/* {
                console.table(links.sort(((a, b) => a.url - b.url)))
            } */}
            {/* {console.log(links)} */}
                {links.map((item) => (
                    <div className="card mb-4 p-1 shadows-all col-md-5" key={item.id}>
                        <div className="card-body">
                            <div className="d-flex justify-content-between ">
                            <h4>
                                <a href={item.url} target="-blank" rel="noopener noreferrer">
                                    {item.name}
                                </a>
                            </h4>
                                <div>
                                    <i
                                        onClick={() => onDelete(item.id)}
                                        className="material-icons text-danger"
                                    >
                                        delete
                                    </i>
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    <i
                                        onClick={() => setCurrentId(item.id)}
                                        className="material-icons text-info"
                                    >
                                        edit
                                    </i>
                                </div>
                            </div>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>




            <div className="border-divided py-4"></div>
        </>
    );
};

export default Links;
