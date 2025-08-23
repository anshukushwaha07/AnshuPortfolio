import React, { useState } from "react";
import Header from "./components/Header";
import Avtar from "./components/Avtar";
import Projects from "./components/Projects";
import Design from "./components/Design";
import Photography from "./components/Photography";
import Footer from "./components/Footer";
import ContactModal from "./components/ContactModal";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Reusable Divider Component for clean code
  const Divider = () => (
    <div className="w-full max-w-3xl mx-auto my-12 h-px bg-gray-200" />
  );

  return (
    <div>
      <Header />
      <div className="px-4">
        {" "}
        {/* Added padding for mobile */}
        <Avtar />
        {/* Responsive Typography */}
        <h1 className="p-6 w-full text-center text-black text-2xl md:text-3xl font-bold">
          Hi, I’m Anshu
        </h1>
        <h2 className="w-full text-center text-black text-3xl md:text-4xl font-bold break-words">
          Crafting engaging interfaces,
          <br /> brands, and digital experiences.
        </h2>
        <p className="w-full text-center text-black text-base font-light break-words mt-4">
          A Frontend Developer and Creative Technologist skilled in building
          <br />
          modern web apps, intuitive user interfaces, and impactful visual
          designs.
        </p>
        <div className="pt-6 flex items-center justify-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-[182px] h-[40px] bg-[#0F0E0E] rounded-[30px] text-[#F9F7F7] text-base font-normal flex items-center justify-center"
          >
            Connect with me
          </button>
        </div>
        <Divider />
        <h3 className="text-center text-black text-3xl font-bold">Projects</h3>
        <p className="text-center font-light mt-2">
          Check out some of my personal and paid projects
        </p>
      </div>
      <Projects />

      <div className="px-4">
        <Divider />

        <h3 className="text-center text-black text-3xl font-bold">
          Design Work
        </h3>
        <p className="text-center font-light mt-2">
          Designing thoughtful, user-centered interfaces that blend aesthetics
          with functionality.
        </p>
      </div>
      <Design />

      <div className="px-4">
        <Divider />

        <h3 className="text-center text-black text-3xl font-bold">
          Photography
        </h3>
        <p className="text-center font-light mt-2">
          Capturing moments through a creative lens to tell visual stories that
          resonate.
        </p>
      </div>
      <Photography />

      {/* Responsive Typography for the final CTA */}
      <div className="my-24 md:my-48 w-full text-center text-black text-3xl md:text-5xl font-raleway font-normal px-4">
        Together, we can create something amazing!
        <br />
        Let's connect! 🤝
      </div>

      <Footer />
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default Home;
