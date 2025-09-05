import React, { useState } from "react";
import Cards from "./Cards";

import movieImage from "../assets/project/Movie.png";

const projectList = [
  {
    title: "Real-Time Chat App",
    description: "A full-featured chat application using React and Socket.io.",
    // This is a CDN URL, so it's just a string.
    imageUrl:
      "https://res.cloudinary.com/dd6hsdwpe/image/upload/v1724726487/chat_beps7a.png",
    link: "https://realtime-chat-hztu.onrender.com/",
  },
  {
    title: "Car Rental Platform",
    description:
      "A web application for browsing and renting cars, built with a modern tech stack.",
    // This is also a CDN URL.
    imageUrl:
      "https://res.cloudinary.com/dd6hsdwpe/image/upload/v1724726487/CarRental_bflmhs.png",
    link: "https://github.com/anshukushwaha07/Car-Rent",
  },
  {
    title: "AI tasks Manager",
    description: "Track tasks and get automatic reminders via email and phone",

    // The path must start with `/` to work on Vercel.
    imageUrl:
      "https://res.cloudinary.com/dd6hsdwpe/image/upload/Gemini_Generated_Image_ii9qqdii9qqdii9q_tmyd1i",
    link: "https://github.com/anshukushwaha07",
  },
  {
    title: "Movie Info App",
    description:
      "Browse and search for information about movies using a public API.",
    // Here we use the variable from our import statement above.
    imageUrl: movieImage,
    link: "https://github.com/anshukushwaha07/MovieInfo",
  },
  {
    title: "Coming Soon Project",
    description: "Another exciting project is in the works. Check back later!",
    // For a placeholder, we explicitly set imageUrl to null.
    imageUrl: null,
    link: "https://github.com/anshukushwaha07",
  },
];

function Projects() {
  const [visibleCount, setVisibleCount] = useState(3);

  const loadMoreProjects = () => {
    setVisibleCount(projectList.length);
  };

  return (
    <section className="px-8 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {projectList.slice(0, visibleCount).map((project, idx) => {
          return project.imageUrl ? (
            // Renders if there IS an image
            <a
              href={project.link}
              key={idx}
              target="_blank"
              rel="noopener noreferrer"
              className="block transform hover:scale-105 transition-transform duration-300"
            >
              <Cards
                title={project.title}
                description={project.description}
                // --- CHANGE 4: Pass the standardized `imageUrl` prop ---
                image={project.imageUrl}
              />
            </a>
          ) : (
            // Renders the placeholder if `imageUrl` is null
            <a
              href={project.link}
              key={idx}
              target="_blank"
              rel="noopener noreferrer"
              className="block transform hover:scale-105 transition-transform duration-300"
            >
              <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 h-full flex flex-col">
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500 font-semibold">
                    Coming Soon
                  </span>
                </div>
                <div className="p-4 flex-grow">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {project.description}
                  </p>
                </div>
              </div>
            </a>
          );
        })}
      </div>

      {visibleCount < projectList.length && (
        <div className="flex justify-center mt-12">
          <button
            onClick={loadMoreProjects}
            className="relative w-[173px] h-[40px] bg-black text-[#FFF5F5] rounded-full text-[16px] font-normal font-raleway flex items-center justify-center hover:bg-gray-800 transition-colors"
          >
            More Projects
          </button>
        </div>
      )}
    </section>
  );
}

export default Projects;
