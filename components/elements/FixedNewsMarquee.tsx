'use client';

import React from 'react';

export default function FixedNewsMarquee() {
  return (
    <div className="fixed-news-marquee">
      <div className="animated-list-wrap">
        <div className="animated-wrap flex animate-marquee whitespace-nowrap">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="animated-inner flex">
              {[...Array(60)].map((_, i) => (
                <span key={i} className="animated-list-item flex items-center">
                  Rani Food Industries Ltd
                  <span className="news-separator"></span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .fixed-news-marquee {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 9999;
          background-color: #000000;
          padding: 12px 0;
          box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.3);
        }
        
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animated-list-item {
          margin: 0 30px;
          font-size: 16px;
          font-weight: 600;
          color: #ffffff;
          white-space: nowrap;
        }
        
        .news-separator {
          width: 2px;
          height: 20px;
          background-color: #e74c3c;
          margin-left: 30px;
        }
      `}</style>
    </div>
  );
}
