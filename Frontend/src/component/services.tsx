// pages/index.tsx (or your main page component)

import { FC } from "react";

const Services: FC = () => {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Services</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Compute Power as a Service */}
          <div className="bg-blue-50 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800">
              Compute Power as a Service
            </h3>
            <p className="mt-8 text-lg text-gray-600">
              Everest Peak Data Centre offers high-performance compute power for
              AI and ML workloads, providing NVIDIA GPU resources optimized for
              tasks such as deep learning, neural network training, and
              large-scale data processing. This service enables educational
              institutions and research organizations to access cutting-edge
              computing power without the need for in-house infrastructure.
            </p>
          </div>

          {/* Consultancy and Computational Lab Setup */}
          <div className="bg-blue-50 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800">
              Consultancy and Computational Lab Setup
            </h3>
            <p className="mt-8 text-lg text-gray-600">
              Our consultancy service is dedicated to helping institutions and
              companies design and set up computational labs tailored for AI and
              ML projects. From hardware selection to deployment, we guide
              clients through the entire process, ensuring efficient,
              cost-effective solutions for building AI capabilities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
