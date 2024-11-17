function WhyUs() {
    return (
      <>
        <div className="flex flex-col py-10 md:py-20">
            <div className="flex flex-col text-center py-20 gap-10">
            <h1 className="text-4xl font-bold z-10 relative">Why you should work with us</h1>
            <p className="text-xl">Ad2Box Media has been a trusted advertising partner since 2018, priding ourselves on performance, trust, and credibility.</p>
            </div>
            <div className="marquee-container text-4xl md:text-8xl font-bold p-2 md:p-10">
            <div className="marquee-content">
                <p className="marquee-text">Define your goals • Identify and define your audience • Track your success.</p>
                <p className="marquee-text">Define your goals • Identify and define your audience • Track your success.</p> {/* Duplicate text */}
            </div>
            </div>
        </div>
      </>
    );
  }
  
  export default WhyUs;
  