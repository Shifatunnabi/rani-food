import { ReactNode } from "react";
import LayoutClientFeatures from "./LayoutClientFeatures";
import Breadcrumb from "./Breadcrumb";
import Footer1 from "./footer/Footer1";
import DataBg from "../elements/DataBg";

import Header4 from "./header/Header4";

interface LayoutProps {
  headerStyle?: 1 | 2 | 3 | 4;
  footerStyle?: 1 | 2;
  breadcrumbTitle?: string;
  wrapperCls?: string;
  children: ReactNode;
}

export default function Layout({
  headerStyle,
  footerStyle,
  breadcrumbTitle,
  wrapperCls,
  children,
}: LayoutProps) {
  const renderFooter = () => {
    switch (footerStyle) {
      case 2:
        return <Footer1 paddingClass="pt-270 pb-75" />;
      default:
        return <Footer1 />;
    }
  };

  return (
    <>
      <DataBg /> {/* Only sets background, no hooks */}
      <div className={`page-wrapper ${wrapperCls ?? ""}`} id="top">
        {/* Client header features */}
        <LayoutClientFeatures headerStyle={headerStyle} />

        {/* Optional breadcrumb */}
        {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}

        {/* Page content */}
        {children}

        {/* Footer */}
        {renderFooter()}
      </div>
    </>
  );
}
