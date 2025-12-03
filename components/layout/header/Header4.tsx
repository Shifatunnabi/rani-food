'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Menu from '../Menu';

interface HeaderProps {
  scroll: boolean;
  isMobileMenu: boolean;
  handleMobileMenu: () => void;
  handlePopup: () => void;
  isSidebar: boolean;
  handleSidebar: () => void;
}

export default function Header({
  scroll,
  isMobileMenu,
  handleMobileMenu,
  handlePopup,
  isSidebar,
  handleSidebar,
}: HeaderProps) {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 150);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Offcanvas overlay */}
      <div className={`offcanvas__overlay ${isMenuOpen ? 'overlay-open' : ''}`}></div>

      <header
        className={`header-area header-two navigation-white transparent-header ${
          isSticky ? 'sticky' : ''
        }`}
      >
        <div className="container">
          <div className="header-navigation">
            <div className="nav-overlay"></div>
            <div className="primary-menu">
              {/*=== Site Branding ===*/}
              <div className="site-branding">
                <Link href="/" className="brand-logo">
                  <Image
                    src="/assets/images/logo/logo.png"
                    alt="Logo"
                    width={150}
                    height={40}
                  />
                </Link>
              </div>

              <div className="nav-inner-menu">
                {/*=== Main Menu ===*/}
                <nav className={`foodix-nav-menu ${isMenuOpen ? 'menu-on' : ''}`}>
                  <div className="main-menu ">
                    <div className="mobile-logo mb-30 d-block d-xl-none text-center">
                      <Link href="/" className="brand-logo">
                        <Image
                          src="/assets/images/logo/logo-main.png"
                          alt="Logo"
                          width={150}
                          height={40}
                        />
                      </Link>
                    </div>
                    <Menu />
                  </div>
                </nav>

                {/*=== Nav Right ===*/}
                <div className="nav-right-item">
                  <div className="nav-button d-none d-xl-block">
                    <Link href="/contact" className="theme-btn style-one">
                      Get in touch
                    </Link>
                  </div>
                  <Link href="/cart" className="cart-button">
                    <i className="far fa-shopping-cart"></i>
                  </Link>

                  {/*=== Mobile Toggle ===*/}
                  <div
                    className={`navbar-toggler ${isMenuOpen ? 'active' : ''}`}
                    onClick={handleMenuToggle}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
