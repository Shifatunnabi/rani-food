'use client'
import Image from "next/image"

export default function AboutUs() {
    const cards = [
        {
            icon: "/assets/images/icon/mission.svg",
            title: "MISSION AND VISION",
            description: "At Rani Food Industries we aspire to generate employment and earn dignity and self-respect for our compatriots through profitable enterprises."
        },
        {
            icon: "/assets/images/icon/vision.svg",
            title: "VISION",
            description: "To be the most admired food and agro-processing company delivering quality products and services that exceed customer expectations."
        },
        {
            icon: "/assets/images/icon/culture.svg",
            title: "ORGANIZATIONAL CULTURE",
            description: "We foster a culture of innovation, teamwork, and continuous improvement to deliver exceptional value to all stakeholders."
        },
        {
            icon: "/assets/images/icon/values.svg",
            title: "CORPORATE VALUES",
            description: "We view our consumers as our king and us as their partners. Our consumers have given us great success over the years."
        },
        {
            icon: "/assets/images/icon/global.svg",
            title: "GLOBAL REACH",
            description: "In the global market, we truly strive to exceed ourselves every step. Therefore, we are growing in whichever market we operate."
        },
        {
            icon: "/assets/images/icon/innovation.svg",
            title: "INNOVATION & EXCELLENCE",
            description: "We continuously innovate and maintain the highest standards of quality to ensure customer satisfaction and business growth."
        }
    ]

    return (
        <>
            <section className="about-us-section py-5" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="container">
                    <div className="row mb-4">
                        <div className="col-12 text-center">
                            <h2 className="section-title mb-3" style={{ color: '#d32f2f', fontWeight: 'bold', fontSize: '36px' }}>
                                About Us
                            </h2>
                            <p className="section-subtitle" style={{ fontSize: '16px', color: '#666' }}>
                                Discover our journey, values, and commitment to excellence
                            </p>
                        </div>
                    </div>
                    <div className="row g-4">
                        {cards.map((card, index) => (
                            <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                                <div className="about-card h-100" style={{
                                    backgroundColor: 'white',
                                    padding: '40px 30px',
                                    borderRadius: '8px',
                                    textAlign: 'center',
                                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                                    transition: 'all 0.3s ease',
                                    borderBottom: '3px solid #d32f2f',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}>
                                    <div className="icon-wrapper mb-4" style={{
                                        width: '80px',
                                        height: '80px',
                                        margin: '0 auto',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: '50%',
                                        border: '2px solid #ddd'
                                    }}>
                                        {/* Using icon images - placeholder for now, can be replaced with actual icons */}
                                        <div style={{
                                            width: '50px',
                                            height: '50px',
                                            backgroundColor: '#d32f2f',
                                            borderRadius: '50%'
                                        }}></div>
                                    </div>
                                    <h3 className="card-title mb-3" style={{
                                        color: '#d32f2f',
                                        fontSize: '18px',
                                        fontWeight: 'bold',
                                        textTransform: 'uppercase'
                                    }}>
                                        {card.title}
                                    </h3>
                                    <p className="card-description" style={{
                                        color: '#666',
                                        fontSize: '14px',
                                        lineHeight: '1.8',
                                        flex: 1
                                    }}>
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <style jsx>{`
                .about-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 8px 15px rgba(0,0,0,0.15) !important;
                }
            `}</style>
        </>
    )
}
