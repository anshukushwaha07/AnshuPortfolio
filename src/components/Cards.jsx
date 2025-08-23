import React from "react";

function Cards({ title, description, image }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-[200px] object-cover"
        />
      )}
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default Cards;
