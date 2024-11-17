import React, { useState, useEffect } from 'react';

// Sample testimonials data
const testimonials = [
  {
    name: "Saul Goodman",
    title: "CEO of Goodman Corp",
    feedback:
      "Ad2Box Media has been a fantastic partner in our advertising journey. Their creativity and attention to detail are unparalleled.",
    image: "https://via.placeholder.com/100x100?text=SG",
  },
  {
    name: "Jessica Pearson",
    title: "Marketing Director at Pearson & Co.",
    feedback:
      "Working with Ad2Box Media has greatly improved our brand visibility. They truly understand our audience.",
    image: "https://via.placeholder.com/100x100?text=JP",
  },
  {
    name: "Harvey Specter",
    title: "COO of Specter Industries",
    feedback:
      "Reliable and efficient! They helped us reach new heights in a very short time.",
    image: "https://via.placeholder.com/100x100?text=HS",
  },
  {
    name: "Mike Ross",
    title: "CTO of Ross Tech",
    feedback:
      "Exceptional service and innovative solutions. I would highly recommend Ad2Box Media!",
    image: "https://via.placeholder.com/100x100?text=MR",
  },
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically move to the next testimonial every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slides every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className="flex flex-col items-center py-10">
      <h2 className="text-3xl md:text-4xl font-bold mb-10">Testimonials</h2>
      <div className="relative w-96 h-36 overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex flex-col items-center gap-4 w-96 h-36 p-6 border-2 border-gray-200 rounded-lg"
              
            >
              {/* <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full object-cover"
              /> */}
              <p className="text-sm text-gray-700">{testimonial.feedback}</p>
              <h6 className="font-semibold text-gray-900">-{testimonial.name}</h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
