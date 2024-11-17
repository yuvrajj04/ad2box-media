function HeroSection() {
  return (
    <div className="relative min-h-screen flex flex-col gap-6 items-center justify-center text-center">
      {/* Colorful Moving Blobs Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-40 animate-pulse"></div>
      <div className="absolute inset-0 bg-blur-10 bg-noise opacity-50"></div>

      {/* Title with responsive text size */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 z-10 relative px-4">
        Be a Part With Ad2box Media!
      </h1>

      {/* Button container with padding adjustments */}
      <div className="flex justify-center z-10 relative">
        <button className="bg-[#4285F4] text-white px-6 md:px-8 py-3 rounded hover:bg-blue-600 text-sm md:text-base">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
