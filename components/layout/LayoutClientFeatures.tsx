"use client";

import { useState, useEffect } from "react";
import Header4 from "./header/Header4";

interface LayoutClientFeaturesProps {
  headerStyle?: 1 | 2 | 3 | 4;
}

export default function LayoutClientFeatures({ headerStyle }: LayoutClientFeaturesProps) {
  const [scroll, setScroll] = useState(false);
  const [isMobileMenu, setMobileMenu] = useState(false);
  const [isPopup, setPopup] = useState(false);
  const [isSidebar, setSidebar] = useState(false);

  useEffect(() => {
    // Scroll detection
    const handleScroll = () => setScroll(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);

    // Dynamically import WOW.js (browser only)
    import("wowjs").then(({ WOW }) => new WOW({ live: false }).init());

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerProps = {
    scroll,
    isMobileMenu,
    handleMobileMenu: () => setMobileMenu((v) => !v),
    handlePopup: () => setPopup((v) => !v),
    isSidebar,
    handleSidebar: () => setSidebar((v) => !v),
  };

  const renderHeader = () => {
    switch (headerStyle) {
      case 2:
        return <Header4 {...headerProps} />;
      case 3:
        return <Header4 {...headerProps} />;
      case 4:
        return <Header4 {...headerProps} />;
      default:
        return <Header4 {...headerProps} />;
    }
  };

  return <>{renderHeader()}</>;
}
