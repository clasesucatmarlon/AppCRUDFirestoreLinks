import React, { useState, useEffect } from "react";

import { db } from "../firebase";

import "../App.css";

const Links = () => {
    const [links, setLinks] = useState([]);

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
