import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#dbeafe] via-[#ffe4e6] to-[#fef9c3] min-h-[500px] flex items-center">
      <div className="max-w-7xl mx-auto px-10 w-full relative">
        {/* Big background text - absolutely centered */}
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[200px] leading-none font-bold text-[#d4d4d8] tracking-tight select-none z-0">
          AlMarkLabs
        </h1>

        {/* Main layout */}
        <div className="relative flex items-center justify-between min-h-[360px] z-10">
          {/* Left side - image badges */}
          <div className="relative flex-1">
            {/* Left star image */}
            <img
              src="/images/star.png"
              alt="star shape"
              className="absolute -left-28 -top-32 w-36 h-36 object-contain"
            />

            {/* Floating Aa image */}
            <img
              src="/images/Aa.png"
              alt="Aa card"
              className="absolute -top-16 left-64 w-24 h-auto object-contain"
            />

            {/* Bottom left Full-Stack pill image */}
            <img
              src="/images/fullstack.png"
              alt="Full Stack badge"
              className="absolute -bottom-36 left-40 w-28 h-auto object-contain"
            />

            {/* Bottom right Agencies pill image */}
            <img
              src="/images/agencies.png"
              alt="Agencies badge"
              className="absolute -bottom-40 -right-[320px] w-28 h-auto object-contain"
            />
          </div>

          {/* Right side - services list */}
          <div className="flex-1 flex justify-end">
            <div className="mt-10 mr-4 text-right space-y-1 text-[11px] text-gray-700">
              <p>ui/ux design</p>
              <p>digital marketing</p>
              <p>web development</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

