'use client';

import React from 'react';

export default function AnimatedHeadline() {
  return (
    <section className="animated-headline-area primary-dark-bg pt-20 pb-20">
      <div className="animated-list-wrap">
        <div className="animated-wrap flex animate-marquee whitespace-nowrap">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="animated-inner flex mr-10">
              {[...Array(3)].map((_, i) => (
                <span key={i} className="animated-list-item mx-6 text-lg font-semibold flex items-center gap-2">
                  Exquisite Four-Cheese Delight Pizza
                  <i className="far fa-asterisk text-yellow-400"></i>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
