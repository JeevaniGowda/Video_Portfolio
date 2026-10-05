import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ============================================================================
// CERTIFICATES DATA
// ============================================================================

const certificatesData = [
  {
    id: 'sql-simplilearn',
    title: 'Introduction to SQL',
    issuer: 'Simplilearn SkillUp',
    issuerBadge: 'SkillUp Certified',
    date: 'April 2026',
    credentialId: '10125539',
    category: 'Database',
    skills: [
      'SQL Queries',
      'Relational Database',
      'MySQL',
      'Data Filtering',
      'Joins & Subqueries',
    ],
    image: '/certificates/introduction-to-sql.jpg',
    accentColor: '#ff2a2a',
    description:
      'Completed training in SQL covering relational databases, SQL queries, data filtering, joins, subqueries, and database operations.',
    verificationUrl: '#',
  },

  {
    id: 'web-dev-udemy',
    title: 'Complete Web Development Course',
    issuer: 'Udemy',
    issuerBadge: 'Udemy Certified',
    date: 'April 2025',
    credentialId: 'UC-5307150f-211f-47f2-802c-293daf691812',
    category: 'Full-Stack',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'Web Development',
      'Frontend Development',
    ],
    image: '/certificates/web-development-udemy.jpg',
    accentColor: '#a855f7',
    description:
      'Completed web development training covering the fundamentals of building responsive and functional web applications using modern web technologies.',
    verificationUrl: '#',
  },

  {
    id: 'learn-java-codechef',
    title: 'Learn Java',
    issuer: 'CodeChef',
    issuerBadge: 'CodeChef Certified',
    date: 'May 2023',
    credentialId: '1f2683a',
    category: 'Programming',
    skills: [
      'Core Java',
      'Java Programming',
      'OOP Concepts',
      'Programming Fundamentals',
    ],
    image: '/certificates/learn-java-codechef.jpg',
    accentColor: '#3b82f6',
    description:
      'Completed the Learn Java course covering Java programming fundamentals and object-oriented programming concepts.',
    verificationUrl: '#',
  },

  {
    id: 'python-101-ibm',
    title: 'Python 101 for Data Science',
    issuer: 'IBM Developer Skills Network',
    issuerBadge: 'IBM Certified',
    date: 'April 2025',
    credentialId: 'PY0101EN',
    category: 'Programming',
    skills: [
      'Python',
      'Data Science',
      'Python Fundamentals',
      'Data Handling',
    ],
    image: '/certificates/python-101-ibm.jpg',
    accentColor: '#10b981',
    description:
      'Completed Python 101 for Data Science training covering Python programming fundamentals and its application in data science.',
    verificationUrl: '#',
  },

  {
    id: 'data-visualization-infosys',
    title: 'Data Visualization Techniques',
    issuer: 'Infosys Springboard',
    issuerBadge: 'Infosys Springboard Certified',
    date: 'April 2025',
    credentialId: 'Infosys Springboard Certificate',
    category: 'Data & Visualization',
    skills: [
      'Data Visualization',
      'Data Analysis',
      'Charts',
      'Data Interpretation',
    ],
    image: '/certificates/data-visualization-infosys.jpg',
    accentColor: '#f59e0b',
    description:
      'Completed training in data visualization techniques with a focus on presenting, analyzing, and interpreting data through effective visualizations.',
    verificationUrl: '#',
  },

  {
    id: 'java-full-stack-jspiders',
    title: 'Java Full Stack Developer',
    issuer: 'JSpiders',
    issuerBadge: 'JSpiders Certified',
    date: 'August 2026',
    credentialId: 'JSpiders Certificate',
    category: 'Full-Stack',
    skills: [
      'Java',
      'JDBC',
      'SQL',
      'HTML',
      'CSS',
      'JavaScript',
      'Spring Boot',
      'Full-Stack Development',
    ],
    image: '/certificates/java-full-stack-jspiders.jpg',
    accentColor: '#ef4444',
    description:
      'Completed Java Full Stack Developer training covering Java programming, SQL, web development, and full-stack application development.',
    verificationUrl: '#',
  },
];

const Certifications = () => {
  const [selectedCertModal, setSelectedCertModal] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const containerRef = useRef(null);

  // ==========================================================================
  // CLOSE MODAL WITH ESC KEY
  // ==========================================================================

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedCertModal(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // ==========================================================================
  // CATEGORIES
  // ==========================================================================

  const categories = [
    'All',
    'Full-Stack',
    'Database',
    'Programming',
    'Data & Visualization',
  ];

  // ==========================================================================
  // FILTERED CERTIFICATES
  // ==========================================================================

  const filteredCerts =
    selectedCategory === 'All'
      ? certificatesData
      : certificatesData.filter(
        (certificate) => certificate.category === selectedCategory
      );

  return (
    <section
      id="certifications"
      ref={containerRef}
      className="relative w-full bg-[#f4f4f2] text-[#111111] py-24 px-6 md:px-12 overflow-hidden border-t border-black/10"
    >
      {/* =====================================================================
          TOP RED DIVIDER
          Clearly separates Certifications from the Projects section
          ===================================================================== */}

      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ff2a2a] to-transparent" />

      {/* =====================================================================
          BACKGROUND DECORATION
          ===================================================================== */}

      {/* Red Ambient Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#ff2a2a]/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Left Glow */}
      <div className="absolute top-1/3 -left-40 w-[450px] h-[450px] bg-[#ff2a2a]/5 rounded-full blur-[130px] pointer-events-none" />

      {/* Right Glow */}
      <div className="absolute bottom-0 -right-40 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ===================================================================
            SECTION HEADING
            =================================================================== */}

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">

          <div>
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-black/10 text-xs font-bold uppercase tracking-widest text-[#ff2a2a] mb-4 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#ff2a2a] animate-pulse"></span>
              Verified Credentials
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1] text-[#111111]">
              Licenses &{' '}
              <span className="text-[#ff2a2a]">Certifications</span>
            </h2>

            {/* Description */}
            <p className="text-gray-600 mt-4 max-w-xl text-base md:text-lg leading-relaxed">
              Professional certifications and technical training completed
              across software development, programming, databases, and data
              visualization.
            </p>
          </div>

          {/* =================================================================
              CATEGORY FILTERS
              ================================================================= */}

          <div className="flex flex-wrap gap-2">

            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${selectedCategory === category
                  ? 'bg-[#ff2a2a] text-white shadow-[0_4px_20px_rgba(255,42,42,0.35)]'
                  : 'bg-white border border-black/10 text-gray-600 hover:text-black hover:bg-gray-100'
                  }`}
              >
                {category}
              </button>
            ))}

          </div>
        </div>

        {/* ===================================================================
            CERTIFICATES LIST
            =================================================================== */}

        <div className="space-y-5">

          {filteredCerts.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              onClick={() => setSelectedCertModal(cert)}
              className="group relative rounded-2xl p-6 md:p-8 transition-all duration-300 cursor-pointer border border-black/10 bg-white shadow-[0_10px_35px_rgba(0,0,0,0.08)] hover:border-[#ff2a2a]/50 hover:shadow-[0_15px_45px_rgba(0,0,0,0.12)]"
            >

              {/* Subtle Hover Accent */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#ff2a2a]/0 via-[#ff2a2a]/0 to-[#ff2a2a]/0 group-hover:from-[#ff2a2a]/5 group-hover:to-transparent transition-all duration-500 pointer-events-none" />

              <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">

                {/* =========================================================
                    LEFT CONTENT
                    ========================================================= */}

                <div className="flex items-start gap-5">

                  {/* Certificate Number */}
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gray-100 border border-black/10 text-sm font-black text-[#ff2a2a] group-hover:scale-110 group-hover:bg-[#ff2a2a] group-hover:text-white transition-all duration-300 shrink-0">
                    0{index + 1}
                  </div>

                  <div>

                    {/* Issuer / Date / Verification */}
                    <div className="flex flex-wrap items-center gap-3 mb-2">

                      {/* Issuer */}
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-gray-100 border border-black/5 text-gray-700">
                        {cert.issuer}
                      </span>

                      {/* Date */}
                      <span className="text-xs text-gray-500 flex items-center gap-1.5">

                        <svg
                          className="w-3.5 h-3.5 text-[#ff2a2a]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>

                        {cert.date}

                      </span>

                      {/* Verified */}
                      <span className="text-xs text-emerald-600 flex items-center gap-1">

                        <svg
                          className="w-3.5 h-3.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>

                        Verified Proof

                      </span>

                    </div>

                    {/* Certificate Title */}
                    <h3 className="text-xl md:text-2xl font-bold text-[#111111] group-hover:text-[#ff2a2a] transition-colors duration-300">
                      {cert.title}
                    </h3>

                    {/* Certificate Description */}
                    <p className="text-gray-600 text-sm mt-2 max-w-2xl leading-relaxed">
                      {cert.description}
                    </p>

                    {/* =====================================================
                        SKILL TAGS
                        ===================================================== */}

                    <div className="flex flex-wrap gap-2 mt-4">

                      {cert.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="text-xs px-2.5 py-1 rounded-md bg-gray-100 border border-black/5 text-gray-700 font-medium"
                        >
                          {skill}
                        </span>
                      ))}

                    </div>

                  </div>
                </div>

                {/* =========================================================
                    RIGHT ACTION
                    ========================================================= */}

                <div className="flex items-center gap-4 lg:self-center pt-3 lg:pt-0 border-t lg:border-t-0 border-black/10">

                  {/* Mobile Certificate Thumbnail */}
                  <div className="lg:hidden w-20 h-14 rounded-lg overflow-hidden border border-black/10 shrink-0 bg-gray-100">

                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover"
                    />

                  </div>

                  <div className="flex items-center gap-3">

                    {/* Credential Information */}
                    <div className="text-right hidden sm:block">

                      <span className="text-xs text-gray-500 block">
                        ID: {cert.credentialId}
                      </span>

                      <span className="text-xs font-semibold text-[#ff2a2a] group-hover:underline">
                        Click for Proof →
                      </span>

                    </div>

                    {/* Eye Button */}
                    <div className="w-10 h-10 rounded-full bg-gray-100 border border-black/10 flex items-center justify-center text-gray-700 group-hover:bg-[#ff2a2a] group-hover:border-[#ff2a2a] group-hover:text-white group-hover:scale-110 transition-all duration-300 shrink-0">

                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >

                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />

                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />

                      </svg>

                    </div>

                  </div>
                </div>

              </div>
            </motion.div>
          ))}

        </div>
      </div>

      {/* =====================================================================
          FULL-SCREEN CERTIFICATE PROOF MODAL
          ===================================================================== */}

      <AnimatePresence>

        {selectedCertModal && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCertModal(null)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
          >

            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              transition={{
                type: 'spring',
                damping: 25,
                stiffness: 300,
              }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#141414] border border-white/20 rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-hidden flex flex-col shadow-[0_25px_70px_rgba(0,0,0,0.9)]"
            >

              {/* =============================================================
                  MODAL HEADER
                  ============================================================= */}

              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/[0.02]">

                <div className="flex items-center gap-3">

                  <div className="w-3 h-3 rounded-full bg-[#ff2a2a] animate-pulse" />

                  <span className="text-sm font-bold tracking-wide text-white">
                    Certificate Verification Proof
                  </span>

                  <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-medium border border-emerald-500/30">
                    Officially Verified
                  </span>

                </div>

                <button
                  onClick={() => setSelectedCertModal(null)}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                  aria-label="Close certificate modal"
                >

                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M6 18L18 6M6 6l12 12"
                    />

                  </svg>

                </button>

              </div>

              {/* =============================================================
                  MODAL BODY
                  ============================================================= */}

              <div className="p-6 md:p-8 overflow-y-auto space-y-6">

                {/* Certificate Image */}
                <div className="relative rounded-2xl overflow-hidden border-2 border-white/15 bg-black shadow-2xl">

                  <img
                    src={selectedCertModal.image}
                    alt={selectedCertModal.title}
                    className="w-full h-auto max-h-[58vh] object-contain mx-auto"
                  />

                  {/* Proof Badge */}
                  <div className="absolute top-4 right-4 bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 text-xs font-bold text-white flex items-center gap-2">

                    <span className="w-2 h-2 rounded-full bg-emerald-400" />

                    Verified Credential Proof

                  </div>

                </div>

                {/* =========================================================
                    METADATA
                    ========================================================= */}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">

                  {/* Certificate */}
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">

                    <span className="text-xs text-gray-400 block mb-1">
                      Course / Certificate
                    </span>

                    <span className="text-sm md:text-base font-bold text-white">
                      {selectedCertModal.title}
                    </span>

                  </div>

                  {/* Issuer */}
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">

                    <span className="text-xs text-gray-400 block mb-1">
                      Issuing Organization
                    </span>

                    <span className="text-sm md:text-base font-bold text-white">
                      {selectedCertModal.issuer}
                    </span>

                  </div>

                  {/* Credential */}
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">

                    <span className="text-xs text-gray-400 block mb-1">
                      Credential ID & Issue Date
                    </span>

                    <span className="text-sm md:text-base font-bold text-[#ff2a2a]">
                      {selectedCertModal.credentialId} •{' '}
                      {selectedCertModal.date}
                    </span>

                  </div>

                </div>

                {/* =========================================================
                    VERIFIED SKILLS
                    ========================================================= */}

                <div className="flex flex-wrap items-center gap-2 pt-2">

                  <span className="text-xs text-gray-400 mr-2">
                    Skills Verified:
                  </span>

                  {selectedCertModal.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs rounded-full bg-[#ff2a2a]/10 border border-[#ff2a2a]/30 text-white font-medium"
                    >
                      {skill}
                    </span>
                  ))}

                </div>

              </div>

              {/* =============================================================
                  MODAL FOOTER
                  ============================================================= */}

              <div className="px-6 py-4 border-t border-white/10 bg-white/[0.02] flex flex-col sm:flex-row justify-between items-center gap-3">

                <span className="text-xs text-gray-400">
                  Proof presented by{' '}
                  <strong className="text-white">
                    Jeevani Gowda BS
                  </strong>
                </span>

                <div className="flex items-center gap-3">

                  {/* Open Original Image */}
                  <a
                    href={selectedCertModal.image}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-full text-xs font-bold bg-white/10 hover:bg-white/20 text-white transition-colors"
                  >
                    Open Full Image ↗
                  </a>

                  {/* Close */}
                  <button
                    onClick={() => setSelectedCertModal(null)}
                    className="px-5 py-2 rounded-full text-xs font-bold bg-[#ff2a2a] hover:bg-red-600 text-white transition-colors shadow-lg"
                  >
                    Close Proof
                  </button>

                </div>

              </div>

            </motion.div>
          </motion.div>
        )}

      </AnimatePresence>
    </section>
  );
};

export default Certifications;