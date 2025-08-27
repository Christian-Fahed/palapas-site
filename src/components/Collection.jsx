import React, { useState, useEffect } from "react";
import "./Collection.css";
import { Link } from 'react-router-dom';
import { loadCollectionData } from "../data/collectionData";

export default function Collection() {
    const [collectionData, setCollectionData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await loadCollectionData();
                setCollectionData(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <section className="py-5" style={{ backgroundColor: '#f1f2f6' }} id="collection">
                <div className="container">
                    <h2 className="section-title">Our Collection</h2>
                    <div className="text-center">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="py-5" style={{ backgroundColor: '#f1f2f6' }} id="collection">
                <div className="container">
                    <h2 className="section-title">Our Collection</h2>
                    <div className="alert alert-danger" role="alert">
                        Error loading collection data: {error}
                    </div>
                </div>
            </section>
        );
    }

    return (
        <>
            <section className="py-5" style={{ backgroundColor: '#f1f2f6' }} id="collection">
                <div className="container">
                    <h2 className="section-title">Our Collection</h2>
                    <div className="gallery">
                        {/* Loop over all collection data and assign the link to its collection key. */}
                        {Object.entries(collectionData).map(([key, collection]) => (
                            <Link to={key} key={key} className="text-decoration-none">
                                <div className="card">
                                    <h3 className="card-title">{collection.title}</h3>
                                    <img
                                        src={`${process.env.PUBLIC_URL}/images/${key}/${collection.frontImage}`}
                                        className="img-fluid"
                                        alt={collection.title}
                                    />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}