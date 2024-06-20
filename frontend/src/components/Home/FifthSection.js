import React from "react";

// HostingCard Component
const HostingCard = ({ title, description, isHighlighted }) => (
  <div
    className={`p-6 border ${
      isHighlighted ? "border-blue-500 bg-blue-50 shadow-lg" : "border-gray-300"
    } rounded-lg`}
  >
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <p className="text-gray-600">{description}</p>
    {isHighlighted && (
      <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
        Discover More
      </button>
    )}
  </div>
);

// FifthSection Component
const FifthSection = () => {
  return (
    <div className="bg-slate-800 text-white py-16">
      <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
          <h2 className="text-4xl font-bold">
            Best <span className="text-red-500">Solution</span> To Scale Your
            Business
          </h2>
          <p className="mt-4 text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-4">
            <a href="#" className="text-red-500">
              <span className="block">Business E-mail</span>
            </a>
            <a href="#" className="text-red-500">
              <span className="block">Website Builder</span>
            </a>
            <a href="#" className="text-red-500">
              <span className="block">Web-Hosting</span>
            </a>
            <a href="#" className="text-red-500">
              <span className="block">API Deploy</span>
            </a>
          </div>
          <button className="mt-6 bg-red-500 text-white px-6 py-3 rounded">
            Discover More
          </button>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2">
          <img
            src="https://via.placeholder.com/400" // Replace with your image URL
            alt="Hosting Solution"
            className="mx-auto"
          />
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-4 mt-16">
        <h2 className="text-3xl font-bold text-center">
          We Provide You World{" "}
          <span className="text-red-500">Best Hosting</span> Services
        </h2>
        <div className="flex flex-wrap justify-center mt-8 gap-8">
          <HostingCard
            title="Shared Hosting"
            description="High performance secured hosting for your website. Don't lose anymore clients for the slowest speed of your hosting service."
          />
          <HostingCard
            title="Dedicated Server"
            description="High performance secured hosting for your website. Don't lose anymore clients for the slowest speed of your hosting service."
          />
          <HostingCard
            title="Virtual Server"
            description="High performance secured hosting for your website. Don't lose anymore clients for the slowest speed of your hosting service."
            isHighlighted
          />
          <HostingCard
            title="Reseller Hosting"
            description="High performance secured hosting for your website. Don't lose anymore clients for the slowest speed of your hosting service."
          />
        </div>
      </div>
    </div>
  );
};

export default FifthSection;
