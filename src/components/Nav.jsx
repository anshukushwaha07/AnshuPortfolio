// import React from "react";
// import { ArrowRight } from "lucide-react";

// function Nav() {
//   const resumeUrl =
//     "https://drive.google.com/file/d/1nvbEDkcC4tkU3cIVCF237kXWrRooBgKZ/view?usp=sharing";

//   return (
//     // This structure is responsive (column on mobile, row on desktop)
//     <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center px-4 md:px-12">
//       <a href="#projects">Projects</a>
//       <a href="#contact">Contact</a>
//       <a href="/blog">Blog</a>
//       <a
//         href={resumeUrl}
//         target="_blank" // This makes it open in a new tab
//         rel="noopener noreferrer" // Important for security
//         className="group flex items-center gap-2 px-4 py-2 font-semibold bg-[#F4E000] hover:bg-amber-200 rounded-3xl"
//       >
//         Resume.
//         <ArrowRight
//           className="transition-transform duration-300 transform group-hover:translate-x-2"
//           strokeWidth={2.5}
//           size={22}
//         />
//       </a>
//     </div>
//   );
// }

// export default Nav;

import React from "react";
import { ArrowRight } from "lucide-react";
// 1. Import the Link component from react-scroll
import { Link } from "react-scroll";

function Nav() {
  const resumeUrl =
    "https://drive.google.com/file/d/1nvbEDkcC4tkU3cIVCF237kXWrRooBgKZ/view?usp=sharing";

  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center px-4 md:px-12">
      {/* 2. Replace <a> with <Link> for smooth scrolling */}
      <Link
        to="projects"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className="cursor-pointer hover:text-[#F4E000] transition-colors duration-300"
        activeClass="text-[#F4E000] font-semibold"
      >
        Projects
      </Link>

      <Link
        to="contact"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className="cursor-pointer hover:text-[#F4E000] transition-colors duration-300"
        activeClass="text-[#F4E000] font-semibold"
      >
        Contact
      </Link>

      {/* This is a standard link to another page, so it stays as an <a> tag */}
      <a
        href="/blog"
        className="hover:text-[#F4E000] transition-colors duration-300"
      >
        Blog
      </a>

      {/* This is an external link, so it also stays as an <a> tag */}
      <a
        href={resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 px-4 py-2 font-semibold text-black bg-[#F4E000] hover:bg-amber-300 rounded-3xl transition-colors duration-300"
      >
        Resume
        <ArrowRight
          className="transition-transform duration-300 transform group-hover:translate-x-2"
          strokeWidth={2.5}
          size={22}
        />
      </a>
    </div>
  );
}

export default Nav;
