"use client";
import Layout from "@/components/layout/Layout";
import { useState } from "react";

export default function JobOpeningPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<any>(null);

  const jobs = [
    {
      id: 1,
      title: "Production Manager",
      designation: "Manager - Production Department",
      description: "Lead production operations, manage production team, ensure quality standards, optimize processes, and meet production targets efficiently.",
    },
    {
      id: 2,
      title: "Quality Assurance Officer",
      designation: "Officer - Quality Control",
      description: "Monitor product quality, conduct inspections, implement quality control procedures, and ensure compliance with food safety standards.",
    },
    {
      id: 3,
      title: "Senior Accountant",
      designation: "Senior Accountant - Finance Department",
      description: "Handle financial reporting, manage accounts, prepare financial statements, and ensure accurate bookkeeping and tax compliance.",
    },
    {
      id: 4,
      title: "Sales Executive",
      designation: "Executive - Sales & Marketing",
      description: "Develop sales strategies, manage client relationships, achieve sales targets, and expand market presence across assigned territories.",
    },
    {
      id: 5,
      title: "HR Manager",
      designation: "Manager - Human Resources",
      description: "Oversee recruitment, employee relations, training programs, performance management, and HR policy implementation.",
    },
    {
      id: 6,
      title: "Mechanical Engineer",
      designation: "Engineer - Maintenance Department",
      description: "Maintain production equipment, troubleshoot mechanical issues, implement preventive maintenance, and optimize machine performance.",
    },
    {
      id: 7,
      title: "Food Technologist",
      designation: "Technologist - R&D Department",
      description: "Develop new products, improve existing formulations, conduct product testing, and ensure nutritional compliance.",
    },
    {
      id: 8,
      title: "Warehouse Supervisor",
      designation: "Supervisor - Warehouse Operations",
      description: "Manage inventory, coordinate logistics, supervise warehouse staff, and ensure efficient storage and distribution operations.",
    },
    {
      id: 9,
      title: "Marketing Executive",
      designation: "Executive - Marketing Department",
      description: "Plan marketing campaigns, manage brand promotion, analyze market trends, and coordinate with advertising agencies.",
    },
    {
      id: 10,
      title: "IT Officer",
      designation: "Officer - IT Department",
      description: "Manage IT infrastructure, provide technical support, maintain network systems, and implement cybersecurity measures.",
    },
  ];

  const handleApplyClick = (job: any) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
  };

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Job Openings">
      <section className="career-section pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb-55 wow fadeInDown">
                <h2>Current Job Openings</h2>
                <p>
                  Join our team and be part of a leading food manufacturing company. 
                  Explore exciting career opportunities and grow with us.
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
                      className="theme-btn style-one"
                      onClick={() => handleApplyClick(job)}
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Apply for {selectedJob?.title}</h3>
              <button className="close-btn" onClick={handleCloseModal}>
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
                      <label>Years of Experience *</label>
                      <input
                        type="number"
                        className="form_control"
                        placeholder="Years of relevant experience"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form_group">
                      <label>Current/Last Position *</label>
                      <input
                        type="text"
                        className="form_control"
                        placeholder="Your current or last job title"
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
                        placeholder="Tell us why you're the perfect fit for this role"
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
          border-radius: 10px;
          padding: 30px;
          transition: all 0.3s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .job-card:hover {
          border-color: #c41e3a;
          box-shadow: 0 10px 30px rgba(196, 30, 58, 0.1);
          transform: translateY(-5px);
        }

        .job-card-header {
          margin-bottom: 15px;
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

        .modal-header {
          padding: 25px 30px;
          border-bottom: 2px solid #f0f0f0;
          display: flex;
          justify-content: space-between;
          align-items: center;
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
