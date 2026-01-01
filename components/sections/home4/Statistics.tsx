'use client'
import CounterUp from "@/components/elements/CounterUp"

export default function Statistics() {
    const stats = [
        {
            count: 1000,
            suffix: "+",
            title: "Premium Products",
            description: "Wide range of quality food products serving millions"
        },
        {
            count: 200,
            suffix: "+",
            title: "Dedicated Employees",
            description: "Skilled workforce committed to excellence"
        },
        {
            count: 50,
            suffix: "+",
            title: "Countries Worldwide",
            description: "Global presence across multiple continents"
        },
        {
            count: 10,
            suffix: "+",
            title: "Quality Certifications",
            description: "International standards and quality assurance"
        }
    ]

    return (
        <>
            <section className="statistics-section py-5" style={{ 
                backgroundColor: '#fff',
                position: 'relative'
            }}>
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-12 text-center">
                            <h2 className="section-title mb-3" style={{ 
                                color: '#d32f2f', 
                                fontWeight: 'bold', 
                                fontSize: '36px' 
                            }}>
                                Our Achievements
                            </h2>
                            <p className="section-subtitle" style={{ 
                                fontSize: '16px', 
                                color: '#666' 
                            }}>
                                Numbers that speak for our excellence
                            </p>
                        </div>
                    </div>
                    <div className="row g-4">
                        {stats.map((stat, index) => (
                            <div key={index} className="col-lg-3 col-md-6 col-sm-6 col-6">
                                <div className="stat-card text-center h-100" style={{
                                    padding: '40px 20px',
                                    backgroundColor: '#f8f9fa',
                                    borderRadius: '8px',
                                    transition: 'all 0.3s ease',
                                    border: '2px solid transparent'
                                }}>
                                    <div className="counter-wrapper mb-3">
                                        <h2 style={{ 
                                            color: '#d32f2f', 
                                            fontWeight: 'bold', 
                                            fontSize: '48px',
                                            marginBottom: '0',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                            <CounterUp 
                                                end={stat.count}
                                            />
                                            <span style={{ fontSize: '48px' }}>{stat.suffix}</span>
                                        </h2>
                                    </div>
                                    <h3 className="stat-title mb-2" style={{
                                        color: '#d32f2f',
                                        fontSize: '20px',
                                        fontWeight: 'bold',
                                        marginBottom: '10px'
                                    }}>
                                        {stat.title}
                                    </h3>
                                    <p className="stat-description" style={{
                                        color: '#666',
                                        fontSize: '14px',
                                        lineHeight: '1.6',
                                        marginBottom: '0'
                                    }}>
                                        {stat.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <style jsx>{`
                .stat-card:hover {
                    transform: translateY(-5px);
                    border-color: #d32f2f !important;
                    box-shadow: 0 8px 20px rgba(211, 47, 47, 0.15);
                }

                @media (max-width: 768px) {
                    .stat-card {
                        padding: 30px 15px;
                    }
                    .counter-wrapper h2 {
                        font-size: 36px !important;
                    }
                    .counter-wrapper h2 span {
                        font-size: 36px !important;
                    }
                    .stat-title {
                        font-size: 16px !important;
                    }
                    .stat-description {
                        font-size: 12px !important;
                    }
                }

                @media (max-width: 576px) {
                    .stat-card {
                        padding: 25px 10px;
                    }
                    .counter-wrapper h2 {
                        font-size: 32px !important;
                    }
                    .counter-wrapper h2 span {
                        font-size: 32px !important;
                    }
                }
            `}</style>
        </>
    )
}
