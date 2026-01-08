"use client";
import Layout from "@/components/layout/Layout";
import { useState } from "react";

export default function FactoryInternshipPage() {
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<any>(null);

  const jobs = [
    {
      id: 1,
      title: "Production Intern",
      designation: "Intern - Production Department",
      description: "Assist in daily production operations, quality control, and process optimization. Learn about manufacturing processes and industry best practices.",
      fullDetails: "As a Production Intern, you will be immersed in our manufacturing environment, gaining hands-on experience in daily production operations. You'll work closely with experienced professionals to understand quality control procedures, process optimization techniques, and industry best practices. This internship offers a comprehensive learning opportunity covering production planning, equipment operation, safety protocols, and efficiency improvement strategies.",
      requirements: ["Currently pursuing or recently completed degree in Industrial Engineering, Food Technology, or related field", "Strong interest in manufacturing and production processes", "Good communication and teamwork skills", "Ability to work in a fast-paced environment"],
      duration: "3-6 months",
    },
    {
      id: 2,
      title: "Quality Control Intern",
      designation: "Intern - QC Department",
      description: "Support quality assurance team in testing products, maintaining quality standards, and documenting quality control procedures.",
      fullDetails: "Join our Quality Control team to learn about comprehensive quality assurance processes in food manufacturing. You'll participate in product testing, quality audits, and documentation of control procedures. This role provides exposure to laboratory analysis, sensory evaluation, and compliance with food safety standards.",
      requirements: ["Background in Food Science, Chemistry, or related field", "Attention to detail and analytical mindset", "Knowledge of laboratory procedures is a plus", "Commitment to food safety standards"],
      duration: "3-6 months",
    },
    {
      id: 3,
      title: "Maintenance Intern",
      designation: "Intern - Maintenance Department",
      description: "Learn about equipment maintenance, troubleshooting, and preventive maintenance schedules under supervision of experienced technicians.",
      fullDetails: "This internship offers practical experience in maintaining and troubleshooting production equipment. You'll learn preventive maintenance strategies, equipment operation principles, and technical problem-solving skills under the guidance of our experienced maintenance team.",
      requirements: ["Engineering student (Mechanical, Electrical, or Industrial)", "Interest in equipment maintenance and mechanical systems", "Basic understanding of technical drawings", "Willingness to learn and work hands-on"],
      duration: "3-6 months",
    },
    {
      id: 4,
      title: "Supply Chain Intern",
      designation: "Intern - Supply Chain Department",
      description: "Gain hands-on experience in inventory management, logistics coordination, and supply chain optimization processes.",
      fullDetails: "Explore the complexities of supply chain management in the food industry. This internship covers inventory control, logistics planning, supplier coordination, and process optimization. You'll gain insights into how materials flow from suppliers to finished products.",
      requirements: ["Business, Supply Chain, or Logistics major", "Strong organizational and analytical skills", "Proficiency in MS Excel", "Interest in operations management"],
      duration: "3-6 months",
    },
    {
      id: 5,
      title: "Food Technology Intern",
      designation: "Intern - R&D Department",
      description: "Work with research and development team on product formulation, testing new recipes, and improving existing products.",
      fullDetails: "Be part of our innovation team! This internship involves product development, recipe testing, and improvement of existing formulations. You'll work on exciting projects that bring new products to market while learning about food science applications.",
      requirements: ["Food Science, Food Technology, or related major", "Creative thinking and experimental mindset", "Knowledge of food processing principles", "Passion for innovation in food products"],
      duration: "3-6 months",
    },
    {
      id: 6,
      title: "Safety Officer Intern",
      designation: "Intern - Health & Safety Department",
      description: "Learn about workplace safety regulations, conduct safety audits, and assist in implementing safety protocols.",
      fullDetails: "Develop expertise in occupational health and safety within a food manufacturing setting. You'll participate in safety audits, risk assessments, and the implementation of safety protocols, gaining valuable knowledge of workplace safety regulations.",
      requirements: ["Safety Management, Environmental Health, or related field", "Knowledge of safety regulations is preferred", "Strong observation and reporting skills", "Commitment to workplace safety"],
      duration: "3-6 months",
    },
    {
      id: 7,
      title: "Packaging Intern",
      designation: "Intern - Packaging Department",
      description: "Understand packaging processes, design considerations, and quality control in packaging operations.",
      fullDetails: "Learn about the critical role of packaging in food manufacturing. This internship covers packaging design, material selection, quality control, and operational efficiency in packaging lines.",
      requirements: ["Packaging Engineering, Industrial Design, or related field", "Interest in packaging technology", "Creative and detail-oriented", "Understanding of quality standards"],
      duration: "3-6 months",
    },
    {
      id: 8,
      title: "Process Engineering Intern",
      designation: "Intern - Engineering Department",
      description: "Support process improvement initiatives, learn about production efficiency, and assist in engineering projects.",
      fullDetails: "Contribute to process optimization and efficiency improvements in our manufacturing operations. This role involves data analysis, process mapping, and participation in continuous improvement projects.",
      requirements: ["Engineering student (Industrial, Chemical, or related)", "Analytical and problem-solving skills", "Knowledge of process improvement methodologies", "Strong computer skills"],
      duration: "3-6 months",
    },
    {
      id: 9,
      title: "Laboratory Intern",
      designation: "Intern - Laboratory Department",
      description: "Conduct laboratory tests, analyze samples, maintain lab equipment, and prepare detailed reports.",
      fullDetails: "Gain laboratory experience in food testing and analysis. You'll conduct various tests, analyze samples, maintain equipment, and prepare comprehensive reports while learning about quality assurance in food manufacturing.",
      requirements: ["Chemistry, Microbiology, or Food Science major", "Laboratory experience preferred", "Attention to detail and accuracy", "Good documentation skills"],
      duration: "3-6 months",
    },
    {
      id: 10,
      title: "Warehouse Intern",
      designation: "Intern - Warehouse Department",
      description: "Learn about warehouse operations, inventory tracking, storage management, and logistics coordination.",
      fullDetails: "Understand warehouse management in a food manufacturing context. This internship covers inventory systems, storage optimization, logistics coordination, and the use of warehouse management software.",
      requirements: ["Business, Logistics, or related major", "Organizational skills", "Basic computer skills", "Ability to work in warehouse environment"],
      duration: "3-6 months",
    },
  ];

  const handleViewDetails = (job: any) => {
    setSelectedJob(job);
    setIsDetailsModalOpen(true);
  };

  const handleApplyClick = () => {
    setIsDetailsModalOpen(false);
    setIsApplyModalOpen(true);
  };

  const handleCloseModals = () => {
    setIsDetailsModalOpen(false);
    setIsApplyModalOpen(false);
    setSelectedJob(null);
  };

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Factory Internship">
      <section className="career-section pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb-55 wow fadeInDown">
                <h2>Factory Internship Opportunities</h2>
                <p>
                  Gain valuable hands-on experience in food manufacturing industry. 
                  Join us to learn from industry experts and kickstart your career.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            {jobs.map((job, index) => (
              <div key={job.id} className="col-lg-6 col-md-6 mb-30">
                <div className="job-card wow fadeInUp" data-wow-delay={`${0.1 + index * 0.05}s`}>
                  <div className="job-card-header">
                    <h3 className="job-title">{job.title}</h3>
                    <span className="job-designation">{job.designation}</span>
                  </div>
                  <div className="job-card-body">
                    <p className="job-description">{job.description}</p>
                  </div>
                  <div className="job-card-footer">
                    <button 
                      className="theme-btn-outline"
                      onClick={() => handleViewDetails(job)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Details Modal */}
      {isDetailsModalOpen && selectedJob && (
        <div className="modal-overlay" onClick={handleCloseModals}>
          <div className="modal-content details-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{selectedJob.title}</h3>
              <button className="close-btn" onClick={handleCloseModals}>
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-body">
              <div className="job-details">
                <div className="detail-section">
                  <h4 className="detail-heading">Position</h4>
                  <p className="detail-designation">{selectedJob.designation}</p>
                </div>
                
                <div className="detail-section">
                  <h4 className="detail-heading">Duration</h4>
                  <p>{selectedJob.duration}</p>
                </div>

                <div className="detail-section">
                  <h4 className="detail-heading">Description</h4>
                  <p>{selectedJob.fullDetails}</p>
                </div>

                <div className="detail-section">
                  <h4 className="detail-heading">Requirements</h4>
                  <ul className="requirements-list">
                    {selectedJob.requirements.map((req: string, idx: number) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                </div>

                <div className="detail-section">
                  <button className="theme-btn style-one w-100" onClick={handleApplyClick}>
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Application Modal */}
      {isApplyModalOpen && selectedJob && (
        <div className="modal-overlay" onClick={handleCloseModals}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Apply for {selectedJob.title}</h3>
              <button className="close-btn" onClick={handleCloseModals}>
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-body">
              <form className="application-form">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form_group">
                      <label>Full Name *</label>
                      <input
                        type="text"
                        className="form_control"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form_group">
                      <label>Email *</label>
                      <input
                        type="email"
                        className="form_control"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form_group">
                      <label>Phone *</label>
                      <input
                        type="tel"
                        className="form_control"
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form_group">
                      <label>Education *</label>
                      <input
                        type="text"
                        className="form_control"
                        placeholder="Your current education"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form_group">
                      <label>Resume/CV *</label>
                      <input
                        type="file"
                        className="form_control"
                        accept=".pdf,.doc,.docx"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form_group">
                      <label>Cover Letter</label>
                      <textarea
                        className="form_control"
                        rows={4}
                        placeholder="Tell us why you're interested in this position"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form_group">
                      <button type="submit" className="theme-btn style-one w-100">
                        Submit Application
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .job-card {
          background: #fff;
          border: 2px solid #f0f0f0;
          border-bottom: 4px solid #c41e3a;
          border-radius: 10px;
          padding: 30px;
          transition: all 0.3s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .job-card:hover {
          border-color: #c41e3a;
          box-shadow: 0 10px 30px rgba(196, 30, 58, 0.15);
          transform: translateY(-5px);
        }

        .job-card-header {
          margin-bottom: 15px;
          padding-bottom: 15px;
          border-bottom: 1px solid #f0f0f0;
        }

        .job-title {
          font-size: 24px;
          font-weight: 700;
          color: #333;
          margin-bottom: 8px;
        }

        .job-designation {
          font-size: 14px;
          color: #c41e3a;
          font-weight: 600;
          text-transform: uppercase;
        }

        .job-card-body {
          flex: 1;
          margin-bottom: 20px;
        }

        .job-description {
          color: #666;
          line-height: 1.8;
          font-size: 15px;
        }

        .job-card-footer {
          margin-top: auto;
        }

        .theme-btn-outline {
          background: transparent;
          border: 2px solid #c41e3a;
          color: #c41e3a;
          padding: 12px 30px;
          font-size: 16px;
          font-weight: 600;
          border-radius: 5px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
        }

        .theme-btn-outline:hover {
          background: #c41e3a;
          color: #fff;
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 20px;
        }

        .modal-content {
          background: #fff;
          border-radius: 10px;
          max-width: 700px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
        }

        .details-modal {
          max-width: 800px;
        }

        .modal-header {
          padding: 25px 30px;
          border-bottom: 2px solid #f0f0f0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #f8f8f8;
        }

        .modal-header h3 {
          margin: 0;
          font-size: 24px;
          color: #333;
        }

        .close-btn {
          background: none;
          border: none;
          font-size: 24px;
          color: #999;
          cursor: pointer;
          transition: color 0.3s;
          padding: 0;
          width: 30px;
          height: 30px;
        }

        .close-btn:hover {
          color: #c41e3a;
        }

        .modal-body {
          padding: 30px;
        }

        .job-details {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .detail-section {
          padding-bottom: 20px;
          border-bottom: 1px solid #f0f0f0;
        }

        .detail-section:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .detail-heading {
          font-size: 18px;
          font-weight: 700;
          color: #c41e3a;
          margin-bottom: 10px;
        }

        .detail-designation {
          font-size: 16px;
          color: #666;
          font-weight: 600;
        }

        .requirements-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .requirements-list li {
          padding: 10px 0 10px 25px;
          position: relative;
          color: #666;
          line-height: 1.6;
        }

        .requirements-list li:before {
          content: "✓";
          position: absolute;
          left: 0;
          color: #c41e3a;
          font-weight: bold;
        }

        .application-form label {
          display: block;
          margin-bottom: 8px;
          color: #333;
          font-weight: 600;
          font-size: 14px;
        }

        .form_group {
          margin-bottom: 20px;
        }

        @media (max-width: 768px) {
          .modal-content {
            max-width: 100%;
          }

          .job-card {
            padding: 20px;
          }

          .job-title {
            font-size: 20px;
          }
        }
      `}</style>
    </Layout>
  );
}
