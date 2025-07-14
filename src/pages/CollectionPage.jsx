import React, { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import collectionData from "../data/collectionData";

function CollectionPage() {
    const { type } = useParams();
    const navigate = useNavigate();
    const data = collectionData[type];
    const sectionRef = useRef(null);

    // Scroll to top when this page loads
    useEffect(() => {
        sectionRef.current?.scrollIntoView({ behavior: 'smooth' });

        // Offset scroll by -100px after a short delay
        setTimeout(() => {
            window.scrollBy({ top: -100, behavior: 'smooth' })
        }, 500);
    }, [type]);

    if (!data) {
        return <h2 style={{ textAlign: 'center' }}>Collection not found.</h2>;
    }

    return (
        <section ref={sectionRef} className="py-5" style={{ backgroundColor: '#121212', color: '#fff' }}>
            <div className="container">
                {/* Back to Home Button  */}
                <div className="mb-4">
                    <button className="btn-gold" onClick={() => navigate('/')}>
                        Back to Home
                    </button>
                </div>

                <h2 className="section-title text-white mb-4">{data.title}</h2>

                {/* Features section */}
                {data.features && (
                    <div className="mb-5">
                        <h4 className="text-white mb-3">Features</h4>
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
                    {data.images.map((src, index) => (
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
