'use client';

import React from 'react';

const About = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-100 to-indigo-300 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Page Heading */}
        <header className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-indigo-700" data-testid="about-page-title">
            About Dr. SPM IIIT-Naya Raipur | Premier Institute for IT and Research
          </h1>
          <p className="text-xl text-gray-700 mt-4 max-w-3xl mx-auto">
            Dr. SPM IIIT-Naya Raipur is committed to academic excellence, fostering innovation, and producing top-notch professionals in the field of Information Technology.
          </p>
        </header>

        {/* Highlights Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-semibold text-indigo-600 border-b-4 border-indigo-500 pb-2 mb-6">
            Highlights of Dr. SPM IIIT-Naya Raipur
          </h2>
          <ul className="list-inside list-disc space-y-4 text-lg text-gray-800">
            <li>Established as a University by the Government of Chhattisgarh</li>
            <li>Recognized by UGC for academic excellence</li>
            <li>AICTE approvals for the years 2020-2025</li>
            <li>Industry-driven curriculum fostering innovation and entrepreneurship</li>
            <li>State-of-the-art infrastructure with fully residential campus</li>
            <li>Research-focused with modern teaching facilities</li>
            <li>Professional English Language Development programs</li>
          </ul>
        </section>

        {/* Vision and Mission Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-semibold text-indigo-600 border-b-4 border-indigo-500 pb-2 mb-6">
            Our Vision and Mission
          </h2>
          <p className="text-lg text-gray-800">
            At Dr. SPM IIIT-Naya Raipur, we aim to become a global leader in higher education, with a focus on Information Technology and allied disciplines. We empower students with the knowledge and entrepreneurial skills to solve real-world problems.
          </p>
        </section>

        {/* Campus Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-semibold text-indigo-600 border-b-4 border-indigo-500 pb-2 mb-6">
            State-of-the-Art Campus in Atal Nagar, Raipur
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Dr. SPM IIIT-NR's residential campus spans over 50 acres, located in the smart city of Atal Nagar, 23 km from Raipur. The campus features Wi-Fi connectivity, modern security systems, and facilities for sports and recreation, all aimed at promoting student creativity and innovation. Our classrooms are equipped with advanced technologies, providing an optimal environment for academic excellence.
          </p>
        </section>

        {/* Board Members Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-semibold text-indigo-600 border-b-4 border-indigo-500 pb-2 mb-6">
            Eminent Board Members at Dr. SPM IIIT-Naya Raipur
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-semibold text-indigo-600">Saurabh Srivastava</h3>
              <p className="text-gray-700">Co-founder and former Chairman of NASSCOM</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-semibold text-indigo-600">Prof. U B Desai</h3>
              <p className="text-gray-700">Founding Director of IIT Hyderabad</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-semibold text-indigo-600">Mr. Sujit Baksi</h3>
              <p className="text-gray-700">President, Corporate Affairs, Tech Mahindra</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-semibold text-indigo-600">A. Pinto</h3>
              <p className="text-gray-700">Retired Lead Director of Emirates Investment Bank</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-semibold text-indigo-600">Dr. N.K. Goyal</h3>
              <p className="text-gray-700">Chairman, TEMA</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-semibold text-indigo-600">Dr. A. K. Agarwal</h3>
              <p className="text-gray-700">Director, IIT Roorkee</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-semibold text-indigo-600">Dr. P. S. Bansal</h3>
              <p className="text-gray-700">Director, Bansal Institute of Engineering and Technology</p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="text-center mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h3>
          <p className="text-lg text-gray-600">
            Phone: <span className="font-medium">+91-1234567890</span>
          </p>
          <p className="text-lg text-gray-600">
            Email: <a href="mailto:info@iiitnr.edu.in" className="text-indigo-600 font-medium">info@iiitnr.edu.in</a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
