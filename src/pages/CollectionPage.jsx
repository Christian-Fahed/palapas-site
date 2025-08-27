import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { loadCollectionData } from "../data/collectionData";

function CollectionPage() {
    const { type } = useParams();
    const navigate = useNavigate();
    const [collectionData, setCollectionData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const sectionRef = useRef(null);

    const data = collectionData[type];

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

    // Scroll to top when this page loads and data is available
    useEffect(() => {
        if (!loading && data) {
            sectionRef.current?.scrollIntoView({ behavior: 'smooth' });

            // Offset scroll by -100px after a short delay
            setTimeout(() => {
                window.scrollBy({ top: -100, behavior: 'smooth' })
            }, 500);
        }
    }, [type, loading, data]);

    if (loading) {
        return (
            <section className="py-5" style={{ backgroundColor: '#f1f2f6' }}>
                <div className="container">
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
            <section className="py-5" style={{ backgroundColor: '#f1f2f6' }}>
                <div className="container">
                    <div className="mb-4">
                        <button className="btn-gold" onClick={() => navigate('/')}>
                            Back to Home
                        </button>
                    </div>
                    <div className="alert alert-danger" role="alert">
                        Error loading collection data: {error}
                    </div>
                </div>
            </section>
        );
    }

    if (!data) {
        return (
            <section className="py-5" style={{ backgroundColor: '#f1f2f6' }}>
                <div className="container">
                    <div className="mb-4">
                        <button className="btn-gold" onClick={() => navigate('/')}>
                            Back to Home
                        </button>
                    </div>
                    <h2 style={{ textAlign: 'center' }}>Collection not found.</h2>
                </div>
            </section>
        );
    }

    return (
        <section ref={sectionRef} className="py-5" style={{ backgroundColor: '#f1f2f6' }}>
            <div className="container">
                {/* Back to Home Button  */}
                <div className="mb-4">
                    <button className="btn-gold" onClick={() => navigate('/')}>
                        Back to Home
                    </button>
                </div>

                <h2 className="section-title mb-4">{data.title}</h2>

                {/* Features section */}
                {data.features && (
                    <div className="mb-5">
                        <h4 className="">
                            <u>Features</u>
                        </h4>
                        <ul className="list-unstyled row">
                            {data.features.map((feature, index) => (
                                <li key={index} className="col-md-4 mb-2 d-flex align-items-center">
                                    <span className="me-2 text-success">✔</span> {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Collection section */}
                <div className="row g-3 gallery">
                    {data.images && data.images.map((src, index) => (
                        <div className="col-sm-6 col-md-3" key={index}>
                            <div className="card">
                                <img src={process.env.PUBLIC_URL + src} alt={data.title + index} className="img-fluid" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CollectionPage;