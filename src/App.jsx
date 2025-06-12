import React from "react";
import Kingsglaive from "./assets/R.jpeg";
import Final_Fantasy from "./assets/OIP.jpeg";
import Ghost from "./assets/OIP1.jpeg";

const moviesDetais = [
  {
    title: "Kingsglaive",
    subtitle: "Final Fantasy XV",
    description:
      "King Regis, who oversees the land of Lucis, commands his army of soldiers to protect the kingdom from the Niflheim empire's.",
    image: Kingsglaive,
    rating: 4.5,
  },
  {
    title: "Final Fantasy",
    subtitle: "Spirits Within",
    description:
      "A scientist makes a last stand on Earth with the help of a ragtag team of soldiers against an invasion of alien phantoms.",
    image: Final_Fantasy,
    rating: 4.5,
  },
  {
    title: "Ghost In The Shell",
    subtitle: "Ghost In The Shell",
    description:
      "A hacker known as the Puppet Master is hunted by a female cyborg cop and her partner. This film is a revised version of Ghost in the Shell (1995).",
    image: Ghost,
    rating: 5,
  },
];

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full sm:w-80 flex flex-col justify-between">
      <img
        src={movie.image}
        alt={movie.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-10">
        <h2 className="text-xl font-semibold">{movie.title}</h2>
        <h3 className="text-sm text-gray-500">{movie.subtitle}</h3>
        <p className="text-sm text-gray-700 mt-2">{movie.description}</p>
        <div className="flex items-center justify-between mt-4">
          <div className="flex text-black ">
            <span>★★★★☆</span>
          </div>
          <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full w-7 h-7 text-center flex items-center justify-center">
            {movie.rating}
          </span>
        </div>
      </div>
    </div>
  );
};

const MovieCardList = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <header className="bg-gray-800 text-white text-center py-4 text-2xl font-bold h-20 flex justify-center items-center">
        🎬 React Movie Cards
      </header>
      <div className="flex flex-wrap justify-around px-4 m-0">
        {moviesDetais.map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))}
      </div>
    </div>
  );
};

export default MovieCardList;
