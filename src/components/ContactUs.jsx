import React from 'react';

function ContactUs() {
  return (
    <div className="min-h-screen flex flex-col items-center py-8 sm:py-12 px-4 sm:px-5 bg-gray-100">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center">Contact Us</h2>
      
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-md p-5 sm:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3">Get in Touch</h3>
              <p className="text-sm sm:text-base text-gray-700">
                If you have any questions or would like to work with us, feel free to reach out.
              </p>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-gray-700">
              <div className="flex flex-col space-y-1">
                <span className="font-semibold">Address:</span>
                <address className="not-italic">
                  Century colonial park,<br />
                  1800 rogers road,<br />
                  Fort worth, Texas 76107
                </address>
              </div>

              <div className="flex flex-col space-y-1">
                <span className="font-semibold">Phone:</span>
                <a 
                  href="tel:+15122406570" 
                  className="hover:text-blue-600 transition-colors"
                >
                  +1 (512) 240-6570
                </a>
              </div>

              <div className="flex flex-col space-y-1">
                <span className="font-semibold">Email:</span>
                <a 
                  href="mailto:support@funtv4k.com"
                  className="hover:text-blue-600 transition-colors"
                >
                  support@funtv4k.com
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <form 
            className="flex flex-col gap-5" 
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="space-y-4">
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full border border-gray-300 rounded-lg p-2.5 text-sm sm:text-base
                           focus:ring-2 focus:ring-blue-500 focus:border-transparent
                           placeholder:text-gray-400 transition-all duration-200"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label 
                  htmlFor="email" 
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-gray-300 rounded-lg p-2.5 text-sm sm:text-base
                           focus:ring-2 focus:ring-blue-500 focus:border-transparent
                           placeholder:text-gray-400 transition-all duration-200"
                  placeholder="Your Email"
                />
              </div>

              <div>
                <label 
                  htmlFor="message" 
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full border border-gray-300 rounded-lg p-2.5 text-sm sm:text-base
                           focus:ring-2 focus:ring-blue-500 focus:border-transparent
                           placeholder:text-gray-400 transition-all duration-200 resize-y min-h-[120px]"
                  placeholder="Your Message"
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#4285F4] text-white font-semibold px-4 py-2.5 rounded-lg
                       hover:bg-blue-600 active:bg-blue-700 
                       transition-colors duration-200
                       text-sm sm:text-base
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;