import React from "react";
import Head from "next/head";

const Curriculum = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10 bg-white">
      {/* SEO Optimized Meta Tags */}
      <Head>
        <title>IIIT Naya Raipur Curriculum for B.Tech & M.Tech Programs</title>
        <meta
          name="description"
          content="Explore the B.Tech and M.Tech curriculum and admission details for IIIT Naya Raipur. Learn about specializations, eligibility criteria, important dates, and more."
        />
        <meta
          name="keywords"
          content="B.Tech, M.Tech, IIIT Naya Raipur, Computer Science, Electronics, Admission, Curriculum, Data Science, Artificial Intelligence, GATE"
        />
        <meta name="robots" content="index, follow" />
      </Head>

      {/* Page Heading */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-indigo-600">Curriculum & Admission Information</h1>
        <p className="text-lg mt-4 text-gray-600">Explore the B.Tech and M.Tech programs offered at IIIT Naya Raipur.</p>
      </header>

      {/* B.Tech Program Section */}
      <section className="mt-16">
        <h2 className="text-3xl font-semibold text-gray-800 border-b-2 border-indigo-500 pb-2 mb-6">
          B.Tech Programs Offered
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          IIIT Naya Raipur offers a B.Tech program in the following disciplines:
        </p>
        <ul className="list-disc pl-6 mb-8 text-gray-700">
          <li>B.Tech in Computer Science & Engineering (CSE)</li>
          <li>B.Tech in Electronics & Communication Engineering (ECE)</li>
        </ul>

        {/* B.Tech Specializations */}
        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">B.Tech Specializations</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Computer Science and Engineering (CSE):
              <ul className="list-inside list-disc pl-4">
                <li>Artificial Intelligence & Machine Learning</li>
                <li>Cybersecurity</li>
                <li>Data Science</li>
              </ul>
            </li>
            <li>Electronics & Communication Engineering (ECE):
              <ul className="list-inside list-disc pl-4">
                <li>VLSI Design</li>
                <li>Embedded Systems</li>
                <li>Communication Systems</li>
              </ul>
            </li>
          </ul>
        </section>

        {/* B.Tech Academic Calendar */}
        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">B.Tech Academic Calendar</h3>
          <ul className="list-decimal pl-6 text-gray-700">
            <li>First Semester 2024</li>
          </ul>
        </section>

        {/* B.Tech Important Dates */}
        <section className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Important Dates for B.Tech</h3>
          <table className="table-auto w-full text-left border-collapse bg-gray-50 rounded-lg shadow-md">
            <thead>
              <tr className="bg-indigo-100">
                <th className="px-4 py-2 text-gray-800">Sl. No</th>
                <th className="px-4 py-2 text-gray-800">Activities</th>
                <th className="px-4 py-2 text-gray-800">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 text-gray-700">1</td>
                <td className="px-4 py-2 text-gray-700">Application submission start</td>
                <td className="px-4 py-2 text-gray-700">10th May, 2024</td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-gray-700">2</td>
                <td className="px-4 py-2 text-gray-700">Last date of application submission</td>
                <td className="px-4 py-2 text-gray-700">14th July, 2024, 17:00 hrs</td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-gray-700">3</td>
                <td className="px-4 py-2 text-gray-700">Announcement of First Round Selection list</td>
                <td className="px-4 py-2 text-gray-700">16th July, 2024</td>
              </tr>
            </tbody>
          </table>
        </section>
      </section>

      {/* M.Tech Program Section */}
      <section className="mt-16">
        <h2 className="text-3xl font-semibold text-gray-800 border-b-2 border-indigo-500 pb-2 mb-6">
          M.Tech Programs Offered
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          IIIT Naya Raipur offers M.Tech programs in the following disciplines:
        </p>
        <ul className="list-disc pl-6 mb-8 text-gray-700">
          <li>M.Tech in Computer Science & Engineering (CSE)</li>
          <li>M.Tech in Electronics & Communication Engineering (ECE)</li>
        </ul>

        {/* M.Tech Specializations */}
        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">M.Tech Specializations</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Computer Science and Engineering (CSE):
              <ul className="list-inside list-disc pl-4">
                <li>Data Science and Artificial Intelligence</li>
                <li>Information Security</li>
              </ul>
            </li>
            <li>Electronics & Communication Engineering (ECE):
              <ul className="list-inside list-disc pl-4">
                <li>Communication and Signal Processing</li>
                <li>VLSI and Embedded Systems</li>
              </ul>
            </li>
          </ul>
        </section>

        {/* M.Tech Academic Calendar */}
        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">M.Tech Academic Calendar</h3>
          <ul className="list-decimal pl-6 text-gray-700">
            <li>First Semester 2024</li>
          </ul>
        </section>

        {/* M.Tech Important Dates */}
        <section className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Important Dates for M.Tech</h3>
          <table className="table-auto w-full text-left border-collapse bg-gray-50 rounded-lg shadow-md">
            <thead>
              <tr className="bg-indigo-100">
                <th className="px-4 py-2 text-gray-800">Sl. No</th>
                <th className="px-4 py-2 text-gray-800">Activities</th>
                <th className="px-4 py-2 text-gray-800">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 text-gray-700">1</td>
                <td className="px-4 py-2 text-gray-700">Application submission start (For CG and NTPC Quota)</td>
                <td className="px-4 py-2 text-gray-700">10th May, 2024</td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-gray-700">2</td>
                <td className="px-4 py-2 text-gray-700">Last date of application submission</td>
                <td className="px-4 py-2 text-gray-700">14th July, 2024, 17:00 hrs</td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-gray-700">3</td>
                <td className="px-4 py-2 text-gray-700">Announcement of First Round Selection list for GATE qualified candidates</td>
                <td className="px-4 py-2 text-gray-700">16th July, 2024</td>
              </tr>
            </tbody>
          </table>
        </section>
      </section>

      {/* Admission Contact Information */}
      <section className="mt-16 text-center">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h3>
        <address className="text-lg text-gray-600">
          <p>Phone: +91-1234567890</p>
          <p>Email: <a href="mailto:admissions@iiitnr.edu.in" className="text-indigo-600">admissions@iiitnr.edu.in</a></p>
        </address>
      </section>
    </div>
  );
};

export default Curriculum;
