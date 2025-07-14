import React from "react";
import "./Collection.css";
import { Link } from 'react-router-dom';
import collectionData from "../data/collectionData";

export default function Collection() {
    return (
        <section className="py-5" style={{ backgroundColor: '#121212' }} id="collection">
            <div className="container">
                <h2 className="section-title">Our Collection</h2>
                <div className="row g-3 gallery">
                    {/* Loop over all collection data and assign the link to its collection key. */}
                    {Object.entries(collectionData).map(([key, collection]) => (
                        <div className="col-sm-6 col-md-3" key={key}>
                            <Link to={key} className="text-decoration-none">
                                <div className="card">
                                    <h3 className="card-title">{collection.title}</h3>
                                    <img
                                        src={`${process.env.PUBLIC_URL}/images/${key}/${collection.frontImage}`}
                                        className="img-fluid"
                                        alt={collection.title}
                                    />
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}