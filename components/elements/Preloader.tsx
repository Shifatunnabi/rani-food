'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Keep preloader visible for minimum 2.5 seconds to ensure smooth loading
        const minDisplayTime = 2500;
        const startTime = Date.now();

        // Wait for both window load and minimum display time
        const handleLoad = () => {
            const elapsed = Date.now() - startTime;
            const remainingTime = Math.max(0, minDisplayTime - elapsed);
            
            setTimeout(() => {
                setIsLoading(false);
            }, remainingTime);
        };

        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
        }

        // Fallback: hide after maximum 3 seconds regardless of load state
        const maxTimer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        return () => {
            window.removeEventListener('load', handleLoad);
            clearTimeout(maxTimer);
        };
    }, []);

    if (!isLoading) return null;

    return (
        <>
            <div className="custom-preloader">
                <div className="logo-container">
                    {/* Rani Logo - slides to left */}
                    <div className="logo rani-logo">
                        <Image 
                            src="/assets/images/logo/rani.png" 
                            alt="Rani Logo" 
                            width={120} 
                            height={120}
                            priority
                        />
                    </div>
                    
                    {/* Goldmark Logo - center, appears first */}
                    <div className="logo goldmark-logo">
                        <Image 
                            src="/assets/images/logo/goldmark.png" 
                            alt="Goldmark Logo" 
                            width={150} 
                            height={150}
                            priority
                        />
                    </div>
                    
                    {/* Ringo Logo - slides to right */}
                    <div className="logo ringo-logo">
                        <Image 
                            src="/assets/images/logo/ringo.png" 
                            alt="Ringo Logo" 
                            width={120} 
                            height={120}
                            priority
                        />
                    </div>
                </div>
            </div>

            <style jsx>{`
                .custom-preloader {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: white;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 99999;
                    animation: fadeOut 0.5s ease-in-out forwards;
                }

                @keyframes fadeOut {
                    0% {
                        opacity: 1;
                    }
                    100% {
                        opacity: 0;
                        visibility: hidden;
                    }
                }

                .logo-container {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 20px;
                    position: relative;
                }

                .logo {
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .goldmark-logo {
                    z-index: 3;
                    animation: appearCenter 0.5s ease-out forwards;
                }

                .rani-logo {
                    z-index: 2;
                    animation: slideLeft 0.5s ease-out forwards;
                }

                .ringo-logo {
                    z-index: 2;
                    animation: slideRight 0.5s ease-out forwards;
                }

                @keyframes appearCenter {
                    0% {
                        opacity: 0;
                        transform: scale(0.5);
                    }
                    50% {
                        opacity: 1;
                        transform: scale(1.1);
                    }
                    100% {
                        opacity: 1;
                        transform: scale(1);
                    }
                }

                @keyframes slideLeft {
                    0% {
                        opacity: 0;
                        transform: translateX(0) scale(0.8);
                    }
                    100% {
                        opacity: 1;
                        transform: translateX(-40px) scale(1);
                    }
                }

                @keyframes slideRight {
                    0% {
                        opacity: 0;
                        transform: translateX(0) scale(0.8);
                    }
                    100% {
                        opacity: 1;
                        transform: translateX(40px) scale(1);
                    }
                }

                @media (max-width: 768px) {
                    .logo-container {
                        gap: 10px;
                    }

                    @keyframes slideLeft {
                        0% {
                            opacity: 0;
                            transform: translateX(0) scale(0.8);
                        }
                        100% {
                            opacity: 1;
                            transform: translateX(-20px) scale(0.8);
                        }
                    }

                    @keyframes slideRight {
                        0% {
                            opacity: 0;
                            transform: translateX(0) scale(0.8);
                        }
                        100% {
                            opacity: 1;
                            transform: translateX(20px) scale(0.8);
                        }
                    }
                }
            `}</style>
        </>
    );
}

