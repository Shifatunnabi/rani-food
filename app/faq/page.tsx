"use client";

import { useState } from "react";
import Layout from "@/components/layout/Layout";

export default function FaqsPage() {
  const faqsLeft = [
    {
      q: "What is Sustainable Construction?",
      a: "Sustainable construction focuses on reducing environmental impact and promoting energy efficiency in all stages of building design and execution.",
    },
    {
      q: "What Are The Different Types of Construction?",
      a: "There are residential, commercial, industrial, and infrastructure types of construction, each serving unique functions and materials.",
    },
    {
      q: "What’re The Stages of a Construction Project?",
      a: "Typically: planning, design, pre-construction, procurement, construction, and post-construction stages.",
    },
    {
      q: "How Long Does It Take to Build?",
      a: "It depends on the size and complexity of the project, ranging from a few weeks to several years.",
    },
  ];

  const faqsRight = [
    {
      q: "Do You Offer Eco-Friendly Materials?",
      a: "Yes, we prioritize sustainable materials wherever possible to reduce carbon footprint.",
    },
    {
      q: "Can I Request a Custom Design?",
      a: "Absolutely! Our architects will work closely with you to bring your vision to life.",
    },
    {
      q: "Is There a Warranty On Projects?",
      a: "Yes, we provide warranties depending on the type of project and materials used.",
    },
    {
      q: "Do You Handle Permits and Regulations?",
      a: "Yes, our team manages all necessary permits and ensures compliance with local building regulations.",
    },
  ];

  const [openIndexLeft, setOpenIndexLeft] = useState<number | null>(null);
  const [openIndexRight, setOpenIndexRight] = useState<number | null>(null);

  const toggleLeft = (index: number) =>
    setOpenIndexLeft(openIndexLeft === index ? null : index);
  const toggleRight = (index: number) =>
    setOpenIndexRight(openIndexRight === index ? null : index);

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="FAQs">
      <section className="faqs-section pt-120 pb-115 gray-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-55">
              <div className="section-title wow fadeInDown">
                <span className="sub-title">FAQS</span>
                <h2>Frequently Asked Questions</h2>
                <p>
                  Commonly asked questions, concise answers. Streamlined for
                  quick understanding.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            {/* LEFT COLUMN */}
            <div className="col-lg-6">
              <div className="accordion wow fadeInUp">
                {faqsLeft.map((item, i) => (
                  <div key={i} className="accordion-card style-one mb-15">
                    <div
                      className={`accordion-header ${
                        openIndexLeft === i ? "active" : ""
                      }`}
                      onClick={() => toggleLeft(i)}
                      style={{
                        cursor: "pointer",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <h6 className="accordion-title mb-0 w-100" aria-expanded={openIndexLeft === i ? "true" : "false"}>{item.q}</h6>
                    </div>
                    {openIndexLeft === i && (
                      <div className="accordion-content">
                        <p>{item.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="col-lg-6">
              <div className="accordion wow fadeInUp">
                {faqsRight.map((item, i) => (
                  <div key={i} className="accordion-card style-one mb-15">
                    <div
                      className={`accordion-header ${
                        openIndexRight === i ? "active" : ""
                      }`}
                     
                      onClick={() => toggleRight(i)}
                      style={{
                        cursor: "pointer",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}

                       
                    >
                      <h6 className="accordion-title mb-0 w-100" aria-expanded={openIndexRight === i ? "true" : "false"}>{item.q}</h6>
                    </div>
                    {openIndexRight === i && (
                      <div className="accordion-content">
                        <p>{item.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
