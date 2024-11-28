import React from 'react';
import Head from 'next/head';

const patentsData = [
  {
    name: 'Smart Electricity Metering System and Method',
    inventors: 'Nenavath Srinivas Naik, Yathin Prakash Kethepalli',
    filingDate: '12-08-2022',
    status: 'Awarded',
  },
  {
    name: 'Machine Learning-Based Fruit Segregation System',
    inventors: 'Mallikharjuna Rao K, Yathin Prakash Kethepalli',
    filingDate: '15 Sept 2022',
    status: 'Awarded',
  },
  {
    name: 'Smartphone-Based Body Temperature Detection System',
    inventors: 'Shrivishal Tripathi, Divyansh Kushwaha',
    filingDate: '23/7/2022',
    status: 'Awaiting Examination',
  },
  {
    name: 'Automated Vehicle Routing System Using AI and GPS',
    inventors: 'Anuj Kumar, Arvind Saini, Priya Sharma',
    filingDate: '04-10-2023',
    status: 'Awarded',
  },
  {
    name: 'Real-Time Health Monitoring Using Wearables',
    inventors: 'Rohit Singh, Rishabh Gupta',
    filingDate: '20-11-2023',
    status: 'Awaiting Examination',
  },
  {
    name: 'AI-Based Optical Character Recognition for Healthcare Documents',
    inventors: 'Mohan Babu, Preeti Sharma',
    filingDate: '17-05-2022',
    status: 'Awarded',
  },
];

const Patents = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 bg-gray-50">
      <Head>
        <title>Innovative Technology Solutions | Dr. SPM IIIT-Naya Raipur</title>
        <meta
          name="description"
          content="Explore the cutting-edge technology solutions and innovations at Dr. SPM IIIT-Naya Raipur, including recent patents in machine learning, AI, and smart systems."
        />
        <meta
          name="keywords"
          content="technology solutions, patents, innovations, Dr. SPM IIIT-Naya Raipur, machine learning, AI, smart solutions, healthcare, wearables"
        />
        <meta name="author" content="Dr. SPM IIIT-Naya Raipur" />
        <meta property="og:title" content="Innovative Technology Solutions | Dr. SPM IIIT-Naya Raipur" />
        <meta
          property="og:description"
          content="Explore the cutting-edge technology solutions and innovations at Dr. SPM IIIT-Naya Raipur, including recent patents in machine learning, AI, and smart systems."
        />
        <meta property="og:image" content="your-image-url.jpg" />
        <meta property="og:url" content="https://www.iiitnr.ac.in" />
        <meta name="robots" content="index, follow" />
      </Head>

      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Innovative Technology Solutions and Patents
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {patentsData.map((patent, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{patent.name}</h2>
            <p className="text-md text-gray-600 mb-2">
              <strong>Inventors:</strong> {patent.inventors}
            </p>
            <p className="text-md text-gray-600 mb-2">
              <strong>Filing Date:</strong> {patent.filingDate}
            </p>
            <p className="text-md font-bold text-green-600">
              <strong>Status:</strong> {patent.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Patents;
