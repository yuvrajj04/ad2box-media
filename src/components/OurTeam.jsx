import React from 'react';

const Teams = [
  
  {
    name: "Walter White",
    title: "Chief Executive Officer",
    feedback:
      "Working with Ad2Box Media has greatly improved our brand visibility. They truly understand our audience.",
    image: "https://via.placeholder.com/100x100?text=JP",
  },
  {
    name: "Jessica Pearson",
    title: "Marketing Director",
    feedback:
      "Working with Ad2Box Media has greatly improved our brand visibility. They truly understand our audience.",
    image: "https://via.placeholder.com/100x100?text=JP",
  },
  {
    name: "Harvey Specter",
    title: "Chief Operating Officer",
    feedback:
      "Reliable and efficient! They helped us reach new heights in a very short time.",
    image: "https://via.placeholder.com/100x100?text=HS",
  },
  {
    name: "Mike Ross",
    title: "Chief Technical Officer",
    feedback:
      "Exceptional service and innovative solutions. I would highly recommend Ad2Box Media!",
    image: "https://via.placeholder.com/100x100?text=MR",
  },
];

function OurTeam() {
  return (
    <div className="flex flex-col items-center py-10 px-5 gap-10 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Team</h2>
      
      {/* Team Members Container */}
      <div className="grid gap-8 md:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {Teams.map((team, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 border shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={team.image}
              alt={team.name}
              className="w-20 h-20 rounded-full object-cover mb-4"
            />
            <h6 className="font-semibold text-lg">{team.name}</h6>
            <p className="text-sm text-gray-500 mb-2">{team.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurTeam;
