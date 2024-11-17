function Services() {
    return (
      <>
        <div className="flex flex-col p-6 md:p-10 gap-8 md:gap-10">
          <h1 className="text-center text-3xl md:text-4xl font-bold z-10 relative">Our Services</h1>
          
          {/* Horizontal scroll container for cards */}
          <div className="flex gap-6 overflow-x-auto px-4 md:px-20">
            {/* Card 1 */}
            <div className="min-w-[250px] md:min-w-[300px] flex flex-col p-5 border rounded-lg shadow-lg bg-white">
              <h2 className="font-bold">Influencer Marketing</h2>
              <p className="text-gray-600">
                Elevate your brand by connecting with the right creators. Leading influencer marketing agency with 70,000+ micro and macro creators.
              </p>
            </div>
  
            {/* Card 2 */}
            <div className="min-w-[250px] md:min-w-[300px] flex flex-col p-5 border rounded-lg shadow-lg bg-white">
              <h2 className="font-bold">Meme Marketing</h2>
              <p className="text-gray-600">
                Engage with your audience through fun-loving meme marketing to boost brand visibility and audience interaction.
              </p>
            </div>
  
            {/* Card 3 */}
            <div className="min-w-[250px] md:min-w-[300px] flex flex-col p-5 border rounded-lg shadow-lg bg-white">
              <h2 className="font-bold">Social Media Marketing</h2>
              <p className="text-gray-600">
                Build your brand, increase sales, and drive website traffic through strategic social media marketing.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Services;
  