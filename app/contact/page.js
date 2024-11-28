import React from "react";
import Head from "next/head";

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 bg-gray-50">
      <Head>
        <title>Contact | IIIT-Naya Raipur</title>
        <meta
          name="description"
          content="Get in touch with IIIT-Naya Raipur for general inquiries, admissions, placements, or more. Find contact details for various departments and routes to the campus."
        />
        <meta name="keywords" content="IIIT-Naya Raipur, contact details, admissions, placements, convocation, HR, B.Tech, M.Tech, Ph.D." />
        <meta name="author" content="IIIT-Naya Raipur" />
        <meta property="og:title" content="Contact | IIIT-Naya Raipur" />
        <meta
          property="og:description"
          content="Get in touch with IIIT-Naya Raipur for general inquiries, admissions, placements, or more. Find contact details for various departments and routes to the campus."
        />
        <meta property="og:image" content="/path/to/og-image.jpg" />
        <meta property="og:url" content="https://www.iiitnr.ac.in/contact" />
        <link rel="canonical" href="https://www.iiitnr.ac.in/contact" />
      </Head>

      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Contact Information
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Contact Information */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">IIIT-Naya Raipur</h2>
          <p className="text-md text-gray-600 mb-2">
            <strong>Address:</strong>
            <br />
            Plot No. 7, Sector 24, Near Purkhoti Muktangan, Atal Nagar – 493661
            <br />
            Chhattisgarh
          </p>
          <p className="text-md text-gray-600 mb-2">
            <strong>Tel:</strong> (0771) 2474182
          </p>
        </div>

        {/* General Information */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">General Information</h2>
          <p className="text-md text-gray-600 mb-2">
            <strong>Email:</strong> <a href="mailto:iiitnr@iiitnr.ac.in">iiitnr@iiitnr.ac.in</a>
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mb-4 mt-6">Admissions</h3>
          <ul className="text-md text-gray-600">
            <li>
              <strong>B.Tech:</strong> <a href="mailto:btech_admissions@iiitnr.ac.in">btech_admissions@iiitnr.ac.in</a>
            </li>
            <li>
              <strong>M.Tech:</strong> <a href="mailto:mtech_admissions@iiitnr.ac.in">mtech_admissions@iiitnr.ac.in</a>
            </li>
            <li>
              <strong>Ph.D.:</strong> <a href="mailto:phd_admissions@iiitnr.ac.in">phd_admissions@iiitnr.ac.in</a>
            </li>
          </ul>
        </div>

        {/* Other Contacts */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Other Contacts</h2>
          <ul className="text-md text-gray-600">
            <li>
              <strong>Convocation:</strong> <a href="mailto:convocation@iiitnr.edu.in">convocation@iiitnr.edu.in</a>
            </li>
            <li>
              <strong>Academic Affairs:</strong> <a href="mailto:registrar@iiitnr.edu.in">registrar@iiitnr.edu.in</a>
            </li>
            <li>
              <strong>HR:</strong> <a href="mailto:recruitment@iiitnr.ac.in">recruitment@iiitnr.ac.in</a>
            </li>
            <li>
              <strong>Placement:</strong> <a href="mailto:placement@iiitnr.ac.in">placement@iiitnr.ac.in</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Routes Section */}
      <div className="mt-12 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Routes to IIIT-NR</h2>
        <div className="text-md text-gray-600">
          <p>
            <strong>Route from Raipur Railway Station:</strong> 
            <a href="https://goo.gl/maps/99ScvLnW9aT2" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              View on Google Maps
            </a>
          </p>
          <p className="mt-4">
            <strong>Route from Raipur Airport:</strong> 
            <a href="https://goo.gl/maps/B1sLfu9iRDk" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              View on Google Maps
            </a>
          </p>
        </div>
      </div>

      {/* Useful Services Section */}
      <div className="mt-12 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Useful Services</h2>
        <div className="text-md text-gray-600">
          <p>
            <strong>OLA Cabs:</strong> (0771) 3355335
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
