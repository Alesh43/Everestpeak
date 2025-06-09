"use client";

import Image from "next/image";

const logos = [
  "/images/contentstack.png",
  "/images/monday.png",
  "/images/stackoverflow.png",
  "/images/airtable.png",
  "/images/wex.png",
  "/images/snap.png",
  "/images/orum.png",
  "/images/mongodb.png",
  "/images/figma1.png",
  "/images/openai.png",
];

const TrustedBy = () => {
  return (
    <div className="bg-white py-10">
      <h2 className="text-center text-black text-l font-semibold mb-6">
        TRUSTED BY
      </h2>
      <div className="overflow-hidden relative w-full">
        <div className="marquee-track flex w-max space-x-10">
          {[...logos, ...logos].map((logo, index) => (
            <Image
              key={index}
              src={logo}
              alt={`Logo ${index}`}
              width={80}
              height={32}
              className="h-8 w-auto object-contain"
            />
          ))}
        </div>
      </div>

      {/* Marquee animation styling */}
      <style jsx>{`
        .marquee-track {
          animation: scroll-left 60s linear infinite;
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default TrustedBy;
