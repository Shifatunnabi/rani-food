'use client'
import { useEffect, useRef } from 'react'
import Image from "next/image"

export default function ProductSlider() {
    const sliderRef = useRef<HTMLDivElement>(null)

    // Product images - duplicating for infinite scroll effect
    const products = [
        "10--mockup.jpg",
        "Beef-Masala-20gm.jpg",
        "Cashew-Mockup.jpg",
        "Dal-Vaja.jpg",
        "Ezze-Isbgul-PNG.jpg",
        "Flour-Packet-1.jpg",
        "Goldmark-Digestive-Biscuit.jpg",
        "goldmark-dry-cake-biscuit.jpg",
        "GoldMark-Vermecili.jpg",
        "Lexus-Selected-Option1.jpg",
        "Pops-mockup.jpg",
        "Rice.jpg"
    ]

    // Triple the products for seamless infinite scroll
    const allProducts = [...products, ...products, ...products]

    useEffect(() => {
        const slider = sliderRef.current
        if (!slider) return

        let animationFrameId: number
        let scrollPosition = 0
        const scrollSpeed = 1 // pixels per frame

        const animate = () => {
            scrollPosition += scrollSpeed
            
            // Reset position when we've scrolled through one set
            if (scrollPosition >= slider.scrollWidth / 3) {
                scrollPosition = 0
            }
            
            slider.scrollLeft = scrollPosition
            animationFrameId = requestAnimationFrame(animate)
        }

        animationFrameId = requestAnimationFrame(animate)

        // Pause on hover
        const handleMouseEnter = () => {
            cancelAnimationFrame(animationFrameId)
        }

        const handleMouseLeave = () => {
            animationFrameId = requestAnimationFrame(animate)
        }

        slider.addEventListener('mouseenter', handleMouseEnter)
        slider.addEventListener('mouseleave', handleMouseLeave)

        return () => {
            cancelAnimationFrame(animationFrameId)
            slider.removeEventListener('mouseenter', handleMouseEnter)
            slider.removeEventListener('mouseleave', handleMouseLeave)
        }
    }, [])

    return (
        <>
            <section className="product-slider-section py-5" style={{ 
                backgroundColor: '#f8f9fa',
                overflow: 'hidden'
            }}>
                <div className="container-fluid">
                    <div className="row mb-4">
                        <div className="col-12 text-center">
                            <h2 className="section-title mb-3" style={{ 
                                color: '#d32f2f', 
                                fontWeight: 'bold', 
                                fontSize: '36px' 
                            }}>
                                Our Products
                            </h2>
                            <p className="section-subtitle" style={{ 
                                fontSize: '16px', 
                                color: '#666' 
                            }}>
                                Discover our wide range of quality food products
                            </p>
                        </div>
                    </div>
                    
                    <div 
                        ref={sliderRef}
                        className="product-slider-wrapper" 
                        style={{
                            display: 'flex',
                            gap: '30px',
                            overflowX: 'hidden',
                            padding: '20px 0',
                            width: '100%',
                            scrollBehavior: 'auto'
                        }}
                    >
                        {allProducts.map((product, index) => (
                            <div 
                                key={`${product}-${index}`} 
                                className="product-card"
                                style={{
                                    minWidth: '280px',
                                    maxWidth: '280px',
                                    backgroundColor: 'white',
                                    borderRadius: '8px',
                                    padding: '20px',
                                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: '300px'
                                }}
                            >
                                <div style={{
                                    position: 'relative',
                                    width: '100%',
                                    height: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Image
                                        src={`/assets/images/product_slider/${product}`}
                                        alt={product.replace(/\.(jpg|png)$/i, '')}
                                        width={240}
                                        height={240}
                                        style={{
                                            objectFit: 'contain',
                                            maxWidth: '100%',
                                            maxHeight: '100%',
                                            width: 'auto',
                                            height: 'auto'
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <style jsx>{`
                .product-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 8px 20px rgba(0,0,0,0.15) !important;
                }

                @media (max-width: 768px) {
                    .product-card {
                        min-width: 200px !important;
                        max-width: 200px !important;
                        height: 220px !important;
                    }
                }
            `}</style>
        </>
    )
}
