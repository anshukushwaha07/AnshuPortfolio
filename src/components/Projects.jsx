import React, { useState } from "react";
import Cards from "./Cards";

const projectList = [
  {
    title: "Real-Time Chat App",
    description: "A full-featured chat application using React and Socket.io.",
    image: "/src/assets/project/chat.png",
    link: "https://github.com/anshukushwaha07/RealTime-chat",
  },
  {
    title: "Car Rental Platform",
    description:
      "A web application for browsing and renting cars, built with a modern tech stack.",
    image: "/src/assets/project/CarRental.png",
    link: "https://github.com/anshukushwaha07/Car-Rent",
  },
  {
    title: "AI tasks Manager",
    description: "Track tasks and get automatic reminders via email and phone",
    image: "/project/Free.jpeg",
    link: "https://github.com/anshukushwaha07",
  },
  // {
  //   title: "Eat 'N' Split",
  //   description:
  //     "A handy utility to split a bill with friends after a meal, created with React.",
  //   image: "/src/assets/project/eat-n-split.png",
  //   link: "https://github.com/anshukushwaha07/eat-split-money",
  // },
  {
    title: "Movie Info App",
    description:
      "Browse and search for information about movies using a public API.",
    image: "/src/assets/project/Movie.png",
    link: "https://github.com/anshukushwaha07/MovieInfo",
  },
  // You can add more projects here
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
          const isPlaceholder = !project.image.startsWith("/src/assets/");

          return isPlaceholder ? (
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
          ) : (
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
                image={project.image}
              />
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
