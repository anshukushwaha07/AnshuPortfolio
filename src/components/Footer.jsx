import React from "react";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // Twitter is now 'X', so this is the latest icon

function Footer() {
  const socialLinks = {
    linkedin: "https://www.linkedin.com/in/Anshukush/",
    github: "https://github.com/anshukushwaha07",
    instagram: "https://www.instagram.com/mr.anshu.in/",
    twitter: "https://twitter.com/Mr_Anshu_22",
  };

  return (
    <footer className="w-full bg-black text-white py-10 px-4">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center space-y-6">
        <p className="text-base font-raleway font-normal text-center">
          anshu.kush007@gmail.com
        </p>

        <div className="flex justify-center gap-6">
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="text-white hover:text-gray-400 transition-colors duration-300"
          >
            <FaLinkedinIn size={28} />
          </a>
          <a
            href={socialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter Profile"
            className="text-white hover:text-gray-400 transition-colors duration-300"
          >
            <FaXTwitter size={28} />
          </a>
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Profile"
            className="text-white hover:text-gray-400 transition-colors duration-300"
          >
            <FaInstagram size={28} />
          </a>
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="text-white hover:text-gray-400 transition-colors duration-300"
          >
            <FaGithub size={28} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-base font-raleway font-normal text-center">
          Copyright © AK 2025, All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
