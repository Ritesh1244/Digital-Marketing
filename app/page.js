import React from "react";

const Home = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <img
        src="https://www.iiitnr.ac.in/sites/default/files/homepage_banner/WhatsApp%20Image%202020-04-29%20at%2012.51.36%20PM.jpeg"
        alt="IIIT Naya Raipur"
        className="w-full h-screen object-cover"
      />

      {/* Overlay to darken the background */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Main content */}
      <section
        id="home"
        className="relative z-10 text-center py-10 px-4 sm:px-6 md:px-8"
      >
        <h1 className="text-4xl font-bold text-white mb-4">
          Welcome to IIIT Naya Raipur
        </h1>
        <p className="text-lg text-white mb-6">
          Official website of Dr. Shyama Prasad Mukherjee International Institute of Information Technology (IIIT) Naya Raipur. Explore our academic programs, campus life, and more.
        </p>
        <p className="text-white">
          Established with the aim to provide high-quality education in the field of Information Technology, IIIT Naya Raipur is one of India's premier institutions for engineering and technology education.
        </p>
      </section>
    </div>
  );
};

export default Home;
