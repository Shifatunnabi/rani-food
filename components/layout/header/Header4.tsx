'use client';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
  const [isVisible, setIsVisible] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null);
  const [logoAnimated, setLogoAnimated] = useState(false);
  const lastScrollY = useRef(0);

  // Handle scroll - hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Logo animation on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setLogoAnimated(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Toggle sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Close sidebar
  const closeSidebar = () => {
    setIsSidebarOpen(false);
    setMobileOpenDropdown(null);
  };

  // Handle dropdown hover (desktop)
  const handleMouseEnter = (menu: string) => {
    setOpenDropdown(menu);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  // Handle mobile dropdown toggle
  const toggleMobileDropdown = (menu: string) => {
    setMobileOpenDropdown(mobileOpenDropdown === menu ? null : menu);
  };

  // Navigation items
  const navItems = [
    { title: 'Home', href: '/' },
    { title: 'About Us', href: '/about' },
    {
      title: 'Products',
      dropdown: [
        { label: 'Biscuits', href: '/products?category=biscuits' },
        { label: 'Cookies & Rusk', href: '/products?category=cookies-rusk' },
        { label: 'Cake', href: '/products?category=cake' },
        { label: 'Snacks', href: '/products?category=snacks' },
        { label: 'Beverage', href: '/products?category=beverage' },
        { label: 'Grocery Items', href: '/products?category=grocery' },
      ],
    },
    {
      title: 'Media',
      dropdown: [
        { label: 'News', href: '/news' },
        { label: 'Events', href: '/events' },
        { label: 'Gallery', href: '/gallery' },
      ],
    },
    {
      title: 'Career',
      dropdown: [
        { label: 'Factory Internships', href: '/career/internships' },
        { label: 'Job Openings', href: '/career/jobs' },
      ],
    },
    { title: 'Contact Us', href: '/contact' },
  ];

  // Social media links
  const socialLinks = [
    { icon: 'fab fa-facebook-f', href: 'https://facebook.com', label: 'Facebook' },
    { icon: 'fab fa-instagram', href: 'https://instagram.com', label: 'Instagram' },
    { icon: 'fab fa-linkedin-in', href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: 'fab fa-youtube', href: 'https://youtube.com', label: 'YouTube' },
  ];

  return (
    <>
      {/* Custom Navbar Styles */}
      <style jsx global>{`
        .custom-navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 9999;
          transform: translateY(0);
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .custom-navbar.hidden {
          transform: translateY(-100%);
        }

        .navbar-container {
          max-width: 100%;
          margin: 0 auto;
          padding: 0 calc((3 / 16) * 100%);
        }

        /* Top Bar */
        .top-bar {
          background-color: #BF1109;
          padding: 8px 0;
        }

        .top-bar-content {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          gap: 20px;
        }

        .brochure-btn {
          color: white;
          font-size: 14px;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
          background: transparent;
          border: none;
          cursor: pointer;
          text-decoration: none;
        }

        .brochure-btn:hover {
          opacity: 0.8;
          color: white;
        }

        .brochure-btn:active,
        .brochure-btn:focus,
        .brochure-btn:visited {
          color: white;
          outline: none;
        }

        .social-icons {
          display: flex;
          gap: 15px;
        }

        .social-icons a {
          color: white;
          font-size: 16px;
          transition: all 0.3s ease;
        }

        .social-icons a:hover {
          opacity: 0.8;
          transform: scale(1.1);
        }

        /* Middle Bar */
        .middle-bar {
          background-color: white;
          padding: 15px 0;
          border-left: 4px solid #BF1109;
          border-right: 4px solid #BF1109;
        }

        .middle-bar-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transform: translateY(-20px);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .logo-wrapper.animated {
          opacity: 1;
          transform: translateY(0);
        }

        .logo-wrapper.left-logo {
          transition-delay: 0.1s;
        }

        .logo-wrapper.center-logo {
          transition-delay: 0.2s;
        }

        .logo-wrapper.right-logo {
          transition-delay: 0.3s;
        }

        .logo-wrapper img {
          max-height: 60px;
          width: auto;
          object-fit: contain;
        }

        /* Bottom Bar */
        .bottom-bar {
          background-color: #BF1109;
          padding: 0;
          border-bottom: 3px solid white;
        }

        .bottom-bar-content {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .nav-menu {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
          gap: 0;
        }

        .nav-item {
          position: relative;
        }

        .nav-link {
          color: white;
          font-size: 15px;
          font-weight: 600;
          text-transform: uppercase;
          padding: 15px 25px;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: all 0.3s ease;
          text-decoration: none;
          letter-spacing: 0.5px;
        }

        .nav-link:hover {
          background-color: rgba(255, 255, 255, 0.1);
          color: white;
        }

        .nav-link i {
          font-size: 12px;
          transition: transform 0.3s ease;
        }

        .nav-item:hover .nav-link i {
          transform: rotate(180deg);
        }

        /* Dropdown Menu */
        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          background-color: white;
          min-width: 220px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
          opacity: 0;
          visibility: hidden;
          transform: translateY(10px);
          transition: all 0.3s ease;
          border-radius: 0 0 8px 8px;
          overflow: hidden;
          z-index: 1000;
        }

        .nav-item:hover .dropdown-menu {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .dropdown-item {
          display: block;
          padding: 12px 20px;
          color: #333;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.3s ease;
          text-decoration: none;
          border-bottom: 1px solid #f0f0f0;
        }

        .dropdown-item:last-child {
          border-bottom: none;
        }

        .dropdown-item:hover {
          background-color: #BF1109;
          color: white;
          padding-left: 25px;
        }

        /* Mobile Styles */
        .mobile-top-bar {
          display: none;
          background-color: #BF1109;
          padding: 10px 15px;
        }

        .mobile-top-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .hamburger-btn {
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 5px;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .hamburger-btn span {
          display: block;
          width: 25px;
          height: 3px;
          background-color: white;
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .hamburger-btn.active span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 6px);
        }

        .hamburger-btn.active span:nth-child(2) {
          opacity: 0;
        }

        .hamburger-btn.active span:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -6px);
        }

        .mobile-right {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .mobile-brochure-btn {
          color: white;
          font-size: 12px;
          display: flex;
          align-items: center;
          gap: 5px;
          text-decoration: none;
          white-space: nowrap;
        }

        .mobile-brochure-btn:hover,
        .mobile-brochure-btn:active,
        .mobile-brochure-btn:focus,
        .mobile-brochure-btn:visited {
          color: white;
          outline: none;
        }

        .mobile-social-icons {
          display: flex;
          gap: 10px;
        }

        .mobile-social-icons a {
          color: white;
          font-size: 14px;
        }

        .mobile-middle-bar {
          display: none;
          background-color: white;
          padding: 10px 15px;
          border-left: 3px solid #BF1109;
          border-right: 3px solid #BF1109;
        }

        .mobile-logos {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .mobile-logo-wrapper {
          opacity: 0;
          transform: scale(0.8);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .mobile-logo-wrapper.animated {
          opacity: 1;
          transform: scale(1);
        }

        .mobile-logo-wrapper:nth-child(1) {
          transition-delay: 0.1s;
        }

        .mobile-logo-wrapper:nth-child(2) {
          transition-delay: 0.2s;
        }

        .mobile-logo-wrapper:nth-child(3) {
          transition-delay: 0.3s;
        }

        .mobile-logo-wrapper img {
          max-height: 35px;
          width: auto;
        }

        /* Sidebar */
        .sidebar-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          z-index: 10000;
        }

        .sidebar-overlay.active {
          opacity: 1;
          visibility: visible;
        }

        .mobile-sidebar {
          position: fixed;
          top: 0;
          left: -300px;
          width: 300px;
          height: 100vh;
          background-color: white;
          z-index: 10001;
          transition: left 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          overflow-y: auto;
          box-shadow: 2px 0 20px rgba(0, 0, 0, 0.2);
        }

        .mobile-sidebar.active {
          left: 0;
        }

        .sidebar-header {
          background-color: #BF1109;
          padding: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .sidebar-logo img {
          max-height: 40px;
        }

        .sidebar-close {
          background: transparent;
          border: none;
          color: white;
          font-size: 24px;
          cursor: pointer;
          padding: 5px;
          transition: transform 0.3s ease;
        }

        .sidebar-close:hover {
          transform: rotate(90deg);
        }

        .sidebar-nav {
          padding: 20px 0;
        }

        .sidebar-nav-item {
          border-bottom: 1px solid #f0f0f0;
        }

        .sidebar-nav-link {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 20px;
          color: #333;
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          background: transparent;
          border: none;
          width: 100%;
          cursor: pointer;
        }

        .sidebar-nav-link:hover {
          background-color: #f8f8f8;
          color: #BF1109;
        }

        .sidebar-nav-link i {
          transition: transform 0.3s ease;
        }

        .sidebar-nav-link.open i {
          transform: rotate(180deg);
        }

        .sidebar-dropdown {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
          background-color: #f8f8f8;
        }

        .sidebar-dropdown.open {
          max-height: 500px;
        }

        .sidebar-dropdown-item {
          display: block;
          padding: 12px 20px 12px 35px;
          color: #666;
          font-size: 14px;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .sidebar-dropdown-item:hover {
          color: #BF1109;
          background-color: #f0f0f0;
        }

        /* Desktop hidden on mobile */
        @media (max-width: 991px) {
          .top-bar,
          .middle-bar,
          .bottom-bar {
            display: none;
          }

          .mobile-top-bar,
          .mobile-middle-bar {
            display: block;
          }

          .navbar-container {
            padding: 0 15px;
          }
        }

        @media (min-width: 992px) {
          .mobile-top-bar,
          .mobile-middle-bar,
          .sidebar-overlay,
          .mobile-sidebar {
            display: none !important;
          }
        }

        /* Tablet adjustments */
        @media (max-width: 1200px) and (min-width: 992px) {
          .navbar-container {
            padding: 0 calc((2 / 16) * 100%);
          }

          .nav-link {
            padding: 15px 18px;
            font-size: 14px;
          }
        }

        @media (max-width: 576px) {
          .mobile-logo-wrapper img {
            max-height: 28px;
          }

          .mobile-brochure-btn {
            font-size: 11px;
          }
        }
      `}</style>

      {/* Desktop Navbar */}
      <header className={`custom-navbar ${!isVisible ? 'hidden' : ''}`}>
        {/* Top Bar - Desktop */}
        <div className="top-bar">
          <div className="navbar-container">
            <div className="top-bar-content">
              <a
                href="/assets/brochure/Catalog.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="brochure-btn"
              >
                <i className="fas fa-file-pdf"></i>
                Product Catalog
              </a>
              <div className="social-icons">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Middle Bar - Desktop */}
        <div className="middle-bar">
          <div className="navbar-container">
            <div className="middle-bar-content">
              <div className={`logo-wrapper left-logo ${logoAnimated ? 'animated' : ''}`}>
                <Link href="/">
                  <Image
                    src="/assets/images/logo/goldmark.png"
                    alt="Goldmark"
                    width={150}
                    height={60}
                    priority
                  />
                </Link>
              </div>
              <div className={`logo-wrapper center-logo ${logoAnimated ? 'animated' : ''}`}>
                <Link href="/">
                  <Image
                    src="/assets/images/logo/logo.png"
                    alt="Rani Food"
                    width={180}
                    height={60}
                    priority
                  />
                </Link>
              </div>
              <div className={`logo-wrapper right-logo ${logoAnimated ? 'animated' : ''}`}>
                <Link href="/">
                  <Image
                    src="/assets/images/logo/ringo.png"
                    alt="Ringo"
                    width={150}
                    height={60}
                    priority
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Desktop */}
        <div className="bottom-bar">
          <div className="navbar-container">
            <div className="bottom-bar-content">
              <ul className="nav-menu">
                {navItems.map((item, index) => (
                  <li
                    key={index}
                    className="nav-item"
                    onMouseEnter={() => item.dropdown && handleMouseEnter(item.title)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item.dropdown ? (
                      <>
                        <span className="nav-link">
                          {item.title}
                          <i className="fas fa-chevron-down"></i>
                        </span>
                        <div className={`dropdown-menu ${openDropdown === item.title ? 'show' : ''}`}>
                          {item.dropdown.map((dropItem, dropIndex) => (
                            <Link
                              key={dropIndex}
                              href={dropItem.href}
                              className="dropdown-item"
                            >
                              {dropItem.label}
                            </Link>
                          ))}
                        </div>
                      </>
                    ) : (
                      <Link href={item.href!} className="nav-link">
                        {item.title}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile Top Bar */}
        <div className="mobile-top-bar">
          <div className="mobile-top-content">
            <button
              className={`hamburger-btn ${isSidebarOpen ? 'active' : ''}`}
              onClick={toggleSidebar}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <div className="mobile-right">
              <a
                href="/assets/brochure/Mondelez-Catalogue.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-brochure-btn"
              >
                <i className="fas fa-file-pdf"></i>
                <span>Product Catalog</span>
              </a>
              <div className="mobile-social-icons">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Middle Bar */}
        <div className="mobile-middle-bar">
          <div className="mobile-logos">
            <div className={`mobile-logo-wrapper ${logoAnimated ? 'animated' : ''}`}>
              <Link href="/">
                <Image
                  src="/assets/images/logo/goldmark.png"
                  alt="Goldmark"
                  width={80}
                  height={35}
                  priority
                />
              </Link>
            </div>
            <div className={`mobile-logo-wrapper ${logoAnimated ? 'animated' : ''}`}>
              <Link href="/">
                <Image
                  src="/assets/images/logo/logo.png"
                  alt="Rani Food"
                  width={100}
                  height={35}
                  priority
                />
              </Link>
            </div>
            <div className={`mobile-logo-wrapper ${logoAnimated ? 'animated' : ''}`}>
              <Link href="/">
                <Image
                  src="/assets/images/logo/ringo.png"
                  alt="Ringo"
                  width={80}
                  height={35}
                  priority
                />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`sidebar-overlay ${isSidebarOpen ? 'active' : ''}`}
        onClick={closeSidebar}
      ></div>

      {/* Mobile Sidebar */}
      <nav className={`mobile-sidebar ${isSidebarOpen ? 'active' : ''}`}>
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <Image
              src="/assets/images/logo/logo.png"
              alt="Rani Food"
              width={120}
              height={40}
            />
          </div>
          <button className="sidebar-close" onClick={closeSidebar} aria-label="Close menu">
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="sidebar-nav">
          {navItems.map((item, index) => (
            <div key={index} className="sidebar-nav-item">
              {item.dropdown ? (
                <>
                  <button
                    className={`sidebar-nav-link ${mobileOpenDropdown === item.title ? 'open' : ''}`}
                    onClick={() => toggleMobileDropdown(item.title)}
                  >
                    {item.title}
                    <i className="fas fa-chevron-down"></i>
                  </button>
                  <div className={`sidebar-dropdown ${mobileOpenDropdown === item.title ? 'open' : ''}`}>
                    {item.dropdown.map((dropItem, dropIndex) => (
                      <Link
                        key={dropIndex}
                        href={dropItem.href}
                        className="sidebar-dropdown-item"
                        onClick={closeSidebar}
                      >
                        {dropItem.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  href={item.href!}
                  className="sidebar-nav-link"
                  onClick={closeSidebar}
                >
                  {item.title}
                </Link>
              )}
            </div>
          ))}
        </div>
      </nav>

      {/* Spacer for fixed header */}
      <div style={{ height: '140px' }} className="header-spacer"></div>
      <style jsx>{`
        @media (max-width: 991px) {
          .header-spacer {
            height: 100px !important;
          }
        }
      `}</style>
    </>
  );
}
