'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Menu() {
  const [openMenus, setOpenMenus] = useState<number[]>([]);

  // Toggle dropdown open/close
  const toggleSubMenu = (index: number) => {
    setOpenMenus((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  // const menuItems = [
  //   {
  //     title: 'Home',
  //     subMenu: []
  //   },
  //   {
  //     title: 'Menu',
  //     subMenu: [
  //       { href: '/menu-v1', label: 'Menu List One' },
  //       { href: '/menu-v2', label: 'Menu List Two' },
  //       { href: '/menu-v3', label: 'Menu Grid' },
  //       { href: '/menu-details', label: 'Menu Details' },
  //     ],
  //   },
  //   {
  //     title: 'Pages',
  //     subMenu: [
  //       { href: '/about', label: 'About Us' },
  //       { href: '/history', label: 'Our History' },
  //       { href: '/chefs', label: 'Our Chefs' },
  //       { href: '/gallery', label: 'Our Gallery' },
  //       { href: '/faq', label: 'Faqs' },
  //       { href: '/404', label: 'Error 404' },
  //     ],
  //   },
  //   {
  //     title: 'Shop',
  //     subMenu: [
  //       { href: '/products', label: 'Our Shop' },
  //       { href: '/menu-details', label: 'Product Details' },
  //       { href: '/cart', label: 'Cart' },
  //       { href: '/checkout', label: 'Checkout' },
  //     ],
  //   },
  //   {
  //     title: 'Blog',
  //     subMenu: [
  //       { href: '/blog-grid', label: 'Blog Grid' },
  //       { href: '/blog-classic', label: 'Blog Standard' },
  //       { href: '/blog-details', label: 'Blog Details' },
  //     ],
  //   },
  //   { title: 'Contact', href: '/contact' },
  // ];
  const menuItems = [
    {
      title: 'Home',
      href: "/"
    },
    {
      title: 'About us',
      href: "/"
    },
    {
      title: 'Products',
      subMenu: [
        { href: '/', label: 'Biscuits' },
        { href: '', label: 'Cookies & Rusk' },
        { href: '/', label: 'Cake' },
        { href: '/', label: 'Snacks' },
        { href: '/', label: 'Bevarage' },
        { href: '/', label: 'Grocery Items' },
      ],
    },
    {
      title: 'Media',
      href : "/"
    },
    { title: 'Contact', href: '/' },
  ];

  return (
    <ul>
      {menuItems.map((item, index) => (
        <li
          key={index}
          className={`menu-item ${item.subMenu ? 'has-children' : ''}`}
        >
          {item.subMenu ? (
            <>
              <a href="#">
                {item.title}
                <span
                  className={`dd-trigger ${openMenus.includes(index) ? 'sub-menu-open' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    toggleSubMenu(index);
                  }}
                >
                  <i className="far fa-angle-down"></i>
                </span>
              </a>
              <ul
                className="sub-menu"
                style={{
                  display: openMenus.includes(index) ? 'block' : 'none',
                }}
              >
                {item.subMenu.map((sub, subIndex) => (
                  <li key={subIndex}>
                    <Link href={sub.href}>{sub.label}</Link>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <Link href={item.href!}>{item.title}</Link>
          )}
        </li>
      ))}
    </ul>
  );
}
