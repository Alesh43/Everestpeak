// components/Introduction.js
import { Button } from "@/components/ui/button";
import React from "react";

const Introduction = () => {
  return (
    <section id="intro" className="text-center py-16 bg-white shadow-lg">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-gray-800">
          Everest Peak Intelligent Computing
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Everest Peak Intelligent Computing aims to leverage Nepal’s
          high-altitude landscapes for innovative, sustainable high-performance
          computing (HPC). Located at Everest View Point in Solukhumbu, at an
          elevation of 3,200 meters, this facility is optimized for providing
          cost-effective computing power without the high electricity costs
          typical of traditional data centers. By harnessing natural cooling and
          renewable energy sources, Everest Peak Data Centre offers an
          energy-efficient solution tailored for artificial intelligence (AI)
          and machine learning (ML) applications.
        </p>
        <a href="#purpose">
          <Button className="shadcn-button bg-purple-500 hover:bg-purple-700 text-white py-2 px-6 rounded mt-6">
            Learn More
          </Button>
        </a>
      </div>
    </section>
  );
};

export default Introduction;
