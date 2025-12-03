'use client';

import React, { useState, KeyboardEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type MenuItem = {
  id: string;
  title: string;
  image: string;
  price: string;
  rating: string;
  description: string;
  href?: string;
};

type Category = {
  id: string;
  title: string;
  items: MenuItem[];
};

const MENU_CATEGORIES: Category[] = [
  {
    id: 'cat1',
    title: 'Burger',
    items: [
      {
        id: 'm1',
        title: 'Classic chicken',
        image: '/assets/images/menu/menu-2_1.png',
        price: '5.00',
        rating: '4.5',
        description: 'Savor the exceptional with our NEW Steak! Discover succulence redefined.',
        href: '/menu-details',
      },
      {
        id: 'm2',
        title: 'Cheeseburger',
        image: '/assets/images/menu/menu-2_2.png',
        price: '7.00',
        rating: '4.5',
        description: 'Savor the exceptional with our NEW Steak! Discover succulence redefined.',
        href: '/menu-details',
      },
      {
        id: 'm3',
        title: 'Grilled chicken',
        image: '/assets/images/menu/menu-2_3.png',
        price: '3.75',
        rating: '4.5',
        description: 'Savor the exceptional with our NEW Steak! Discover succulence redefined.',
        href: '/menu-details',
      },
    ],
  },
  {
    id: 'cat2',
    title: 'Grilled',
    items: [
      {
        id: 'm4',
        title: 'Smoky BBQ Ribs',
        image: '/assets/images/menu/menu-2_4.png',
        price: '5.00',
        rating: '4.5',
        description: 'Savor the exceptional with our NEW Steak! Discover succulence redefined.',
        href: '/menu-details',
      },
      {
        id: 'm5',
        title: 'Spicy BBQ Chicken',
        image: '/assets/images/menu/menu-2_5.png',
        price: '7.00',
        rating: '4.5',
        description: 'Savor the exceptional with our NEW Steak! Discover succulence redefined.',
        href: '/menu-details',
      },
      {
        id: 'm6',
        title: 'Classic Grilled Shashlik',
        image: '/assets/images/menu/menu-2_6.png',
        price: '3.75',
        rating: '4.5',
        description: 'Savor the exceptional with our NEW Steak! Discover succulence redefined.',
        href: '/menu-details',
      },
    ],
  },
  {
    id: 'cat3',
    title: 'Sizzling',
    items: [
      {
        id: 'm7',
        title: 'Beef Sizzling',
        image: '/assets/images/menu/menu-2_7.png',
        price: '5.00',
        rating: '4.5',
        description: 'Savor the exceptional with our NEW Steak! Discover succulence redefined.',
        href: '/menu-details',
      },
      {
        id: 'm8',
        title: 'Mutton Sizzling',
        image: '/assets/images/menu/menu-2_8.png',
        price: '7.00',
        rating: '4.5',
        description: 'Savor the exceptional with our NEW Steak! Discover succulence redefined.',
        href: '/menu-details',
      },
      {
        id: 'm9',
        title: 'Chicken Sizzling',
        image: '/assets/images/menu/menu-2_9.png',
        price: '3.75',
        rating: '4.5',
        description: 'Savor the exceptional with our NEW Steak! Discover succulence redefined.',
        href: '/menu-details',
      },
    ],
  },
  {
    id: 'cat4',
    title: 'Steak',
    items: [
      {
        id: 'm10',
        title: 'T-Bone Steak',
        image: '/assets/images/menu/menu-2_10.png',
        price: '5.00',
        rating: '4.5',
        description: 'Savor the exceptional with our NEW Steak! Discover succulence redefined.',
        href: '/menu-details',
      },
      {
        id: 'm11',
        title: 'Tomahawk Steak',
        image: '/assets/images/menu/menu-2_11.png',
        price: '7.00',
        rating: '4.5',
        description: 'Savor the exceptional with our NEW Steak! Discover succulence redefined.',
        href: '/menu-details',
      },
      {
        id: 'm12',
        title: 'Filet Steak',
        image: '/assets/images/menu/menu-2_12.png',
        price: '3.75',
        rating: '4.5',
        description: 'Savor the exceptional with our NEW Steak! Discover succulence redefined.',
        href: '/menu-details',
      },
    ],
  },
];

export default function FoodixMenuSection() {
  const [activeCat, setActiveCat] = useState<string>(MENU_CATEGORIES[0].id);

  // keyboard navigation for tabs (left/right)
  function onTabKeyDown(e: KeyboardEvent<HTMLButtonElement>, index: number) {
    const key = e.key;
    if (key !== 'ArrowLeft' && key !== 'ArrowRight') return;

    e.preventDefault();
    const nextIndex = key === 'ArrowRight' ? index + 1 : index - 1;
    const clamped = (nextIndex + MENU_CATEGORIES.length) % MENU_CATEGORIES.length;
    const nextId = MENU_CATEGORIES[clamped].id;
    setActiveCat(nextId);

    // focus the button after state change - documented UX expectation
    const btn = document.querySelector<HTMLButtonElement>(`button[aria-controls="${nextId}"]`);
    btn?.focus();
  }

  return (
    <section className="foodix-menu-section pt-80 pb-90 gray-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center mb-55 wow fadeInDown">
              <span className="sub-title">Our Menu</span>
              <h2>Choose Menu</h2>
              <p>
                Savor the exceptional with our NEW Steak! Discover succulence redefined a tantalizing
                blend of flavors that promises a culinary...
              </p>
            </div>
          </div>
        </div>

        {/* tabs */}
        <div className="row">
          <div className="col-lg-12">
            <div className="foodix-tabs style-four mb-70">
              <ul className="nav nav-tabs wow fadeInDown" role="tablist" aria-label="Menu categories">
                {MENU_CATEGORIES.map((cat, idx) => {
                  const isActive = cat.id === activeCat;
                  return (
                    <li key={cat.id}>
                      <button
                        className={`nav-link ${isActive ? 'active' : ''}`}
                        role="tab"
                        aria-selected={isActive}
                        aria-controls={cat.id}
                        id={`tab-${cat.id}`}
                        tabIndex={isActive ? 0 : -1}
                        onClick={() => setActiveCat(cat.id)}
                        onKeyDown={(e) => onTabKeyDown(e, idx)}
                        data-wow-delay=".3s"
                        type="button"
                      >
                        {cat.title}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        {/* tab panels */}
        <div className="row">
          <div className="col-lg-12">
            <div className="tab-content">
              {MENU_CATEGORIES.map((cat) => {
                const isActive = cat.id === activeCat;
                return (
                  <div
                    key={cat.id}
                    id={cat.id}
                    role="tabpanel"
                    aria-labelledby={`tab-${cat.id}`}
                    className={`tab-pane fade ${isActive ? 'show active' : ''}`}
                  >
                    <div className="row justify-content-center">
                      {cat.items.map((item) => (
                        <div key={item.id} className="col-lg-4 col-md-6 col-sm-12">
                          <article className="menu-item style-five mb-40" aria-labelledby={`title-${item.id}`}>
                            <div className="menu-thumbnail">
                              <Image
                                src={item.image}
                                alt={item.title}
                                width={450}
                                height={320}
                                className="object-cover"
                              />
                            </div>

                            <div className="menu-info">
                              <h4 className="title" id={`title-${item.id}`}>
                                <Link href={item.href ?? '/menu-details'}>{item.title}</Link>
                              </h4>

                              <ul className="ratings" aria-hidden>
                                {/* keep icon markup for your fontawesome or SVG icons */}
                                <li><i className="fas fa-star" /></li>
                                <li><i className="fas fa-star" /></li>
                                <li><i className="fas fa-star" /></li>
                                <li><i className="fas fa-star" /></li>
                                <li><i className="fas fa-star" /></li>
                                <li><a href="#">{`(${item.rating})`}</a></li>
                              </ul>

                              <p>{item.description}</p>

                              <div className="menu-bottom">
                                <p className="price">
                                  <span className="currency">$</span>
                                  {item.price}
                                </p>

                                <Link href="/cart" className="cart-icon" aria-label={`Add ${item.title} to cart`}>
                                  <i className="fas fa-cart-plus" />
                                </Link>
                              </div>
                            </div>
                          </article>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
