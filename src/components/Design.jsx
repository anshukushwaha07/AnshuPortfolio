// import React from "react";

// const designs = [
//   {
//     id: 1,
//     title: "Landing Page UI",
//     description: "Modern Landing page using Figma.",
//     // This is a valid image path, so the image will show
//     img: "https://res.cloudinary.com/dd6hsdwpe/image/upload/design1_srbhfx",
//     link: "https://www.figma.com/proto/OL6V8c1L3HJ3QVfc5l5DrZ/Final?page-id=0%3A1&node-id=1-30&p=f&viewport=432%2C470%2C0.2&t=9th9f3mE3C7Ennbe-1&scaling=min-zoom&content-scaling=fixed",
//   },
//   {
//     id: 2,
//     title: "Dashboard Design",
//     description: "Admin dashboard template.",
//     // This is a placeholder path, so the text will show instead
//     img: "/designs/dashboard.png",
//     link: "#",
//   },
//   {
//     id: 3,
//     title: "Mobile App",
//     description: "Food delivery app concept.",
//     // This is a placeholder path, so the text will show instead
//     img: "/designs/food-app.png",
//     link: "#",
//   },
//   // Add more items as needed
// ];

// function Design() {
//   return (
//     <div className="py-16 px-4 md:px-12 lg:px-24 bg-white">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {designs.map((design) => (
//           <a
//             href={design.link}
//             target="_blank"
//             rel="noopener noreferrer"
//             key={design.id}
//             className="rounded-xl overflow-hidden shadow-md hover:scale-[1.02] transition-transform bg-white border border-gray-200"
//           >
//             {design.img.startsWith("/src/assets/") ? (
//               <img
//                 src={design.img}
//                 alt={design.title}
//                 className="w-full h-[200px] object-cover"
//               />
//             ) : (
//               <div className="w-full h-[200px] bg-gray-200 flex items-center justify-center">
//                 <span className="text-gray-500 font-semibold">Update Soon</span>
//               </div>
//             )}

//             <div className="p-4">
//               <h3 className="text-lg font-semibold">{design.title}</h3>
//               <p className="text-sm text-gray-600 mt-1">{design.description}</p>
//             </div>
//           </a>
//         ))}
//       </div>
//       <div className="flex justify-center mt-12">
//         <button className="relative w-[173px] h-[40px] bg-black text-[#FFF5F5] rounded-full text-[16px] font-normal font-raleway flex items-center justify-center">
//           More Design
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Design;

import React from "react";

const designs = [
  {
    id: 1,
    title: "Landing Page UI",
    description: "Modern Landing page using Figma.",
    // This is a valid URL, so we keep it.
    img: "https://res.cloudinary.com/dd6hsdwpe/image/upload/v1724727142/design1_srbhfx.png",
    link: "https://www.figma.com/proto/OL6V8c1L3HJ3QVfc5l5DrZ/Final?page-id=0%3A1&node-id=1-30&p=f&viewport=432%24C470%2C0.2&t=9th9f3mE3C7Ennbe-1&scaling=min-zoom&content-scaling=fixed",
  },
  {
    id: 2,
    title: "Dashboard Design",
    description: "Admin dashboard template.",

    img: null,
    link: "#",
  },
  {
    id: 3,
    title: "Mobile App",
    description: "Food delivery app concept.",
    img: null,
    link: "#",
  },
];

function Design() {
  return (
    <div className="py-16 px-4 md:px-12 lg:px-24 bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {designs.map((design) => (
          <a
            href={design.link}
            target="_blank"
            rel="noopener noreferrer"
            key={design.id}
            className="rounded-xl overflow-hidden shadow-md hover:scale-[1.02] transition-transform bg-white border border-gray-200"
          >
            {/* --- CHANGE 2: Use a simple, robust check --- */}
            {/* This now reads: "If design.img exists, show the image. Otherwise, show the placeholder." */}
            {design.img ? (
              <img
                src={design.img}
                alt={design.title}
                className="w-full h-[200px] object-cover"
              />
            ) : (
              <div className="w-full h-[200px] bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500 font-semibold">Update Soon</span>
              </div>
            )}

            <div className="p-4">
              <h3 className="text-lg font-semibold">{design.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{design.description}</p>
            </div>
          </a>
        ))}
      </div>
      <div className="flex justify-center mt-12">
        <button className="relative w-[173px] h-[40px] bg-black text-[#FFF5F5] rounded-full text-[16px] font-normal font-raleway flex items-center justify-center">
          More Design
        </button>
      </div>
    </div>
  );
}

export default Design;
