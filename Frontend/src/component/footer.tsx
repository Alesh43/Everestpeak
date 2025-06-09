// components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="bg-black text-white py-6">
      <div className="container mx-auto text-center">
        <p>
          &copy; 2025 Everest Peak Intelligent Computing. All rights reserved.
        </p>
        <div className="mt-4">
          <a href="#" className="hover:text-blue-300 mx-4">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-blue-300 mx-4">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
