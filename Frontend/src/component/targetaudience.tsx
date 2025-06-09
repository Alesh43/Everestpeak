// components/TargetAudience.js
import { CheckCircle } from "lucide-react";
import React from "react";

const TargetAudience = () => {
  const audience = [
    {
      title: "Students and Independent Researchers",
      description:
        "Providing accessible HPC resources for those engaged in AI/ML research, Everest Peak Data Centre enables individuals to pursue advanced studies and experimentation.",
    },
    {
      title: "Educational Institutions",
      description:
        "Colleges and universities benefit from our compute power services, enhancing their research and AI curriculum by offering students access to high-performance infrastructure.",
    },
    {
      title: "AI Product Development Companies (Future Expansion)",
      description:
        "As our capacity grows, we aim to serve organizations focused on developing AI products, meeting their increasing demand for compute power and AI-specific infrastructure.",
    },
  ];

  return (
    <div className="container mx-auto p-6 flex justify-center">
      <div className="bg-white rounded-lg shadow-lg w-full md:w-3/4 lg:w-1/2">
        <div className="border-b p-4 text-center">
          <h2 className="text-3xl font-semibold">Target Audience</h2>
        </div>
        <div className="p-4">
          <ul className="space-y-4">
            {audience.map((item, index) => (
              <li key={index} className="flex items-start gap-4">
                <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-1 text-lg text-gray-600">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TargetAudience;
