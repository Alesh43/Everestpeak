// components/Conclusion.tsx
import React from "react";

const Conclusion: React.FC = () => {
  return (
    <section id="conclusion" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Conclusion</h2>
        <p className="mt-8 text-lg text-gray-600">
          <strong>Everest Peak Computing Solution</strong> represents a
          breakthrough in sustainable, high-performance computing. By
          capitalizing on the natural advantages of its high-altitude location
          and minimizing operational costs, this facility offers AI and ML
          researchers an affordable, eco-friendly solution.
          <br />
          <br />
          Through accessible compute power and expert consultancy for
          computational lab setups, Everest Peak Data Centre is poised to become
          a cornerstone for AI innovation, catering initially to educational and
          research sectors and later expanding to support AI-driven businesses.
        </p>
      </div>
    </section>
  );
};

export default Conclusion;
