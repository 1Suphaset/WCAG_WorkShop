function Hero() {
  return (
    <section className="relative pt-[84px] pb-12 h-auto md:h-[800px] flex flex-col md:flex-row items-center md:items-start justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
      {/* Decorative blur circles */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
      </div>

      {/* Content and image wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 flex flex-col md:flex-row items-center md:items-stretch gap-12">
        {/* Left content */}
        <div className="flex-1 max-w-xl text-white text-center md:text-left">
          <h4 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              ยินดีต้อนรับสู่
            </span>
            <span className="block bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
              ประเทศไทย
            </span>
          </h4>
          <h1 className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-4 md:mb-8 leading-relaxed">
            ค้นพบความงามของแผ่นดินสยาม
          </h1>
          <h2 className="text-base sm:text-lg md:text-lg text-blue-200 mb-8 md:mb-12">
            Discover the Beauty of the Land of Smiles
          </h2>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center md:items-start mb-12">
            <button className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-xl font-semibold text-white shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300">
              <span className="flex items-center space-x-2">
                <span>เริ่มการเดินทาง</span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </button>
            <button className="px-8 py-4 border-2 border-white/30 hover:border-white/50 rounded-xl font-semibold text-white backdrop-blur-sm hover:bg-white/10 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/30">
              ดูวิดีโอ
            </button>
          </div>

          {/* Stats */}
          <div
            style={{ color: "#5C7EDB" }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto md:mx-0"
          >
            <div>
              <div className="text-2xl sm:text-3xl font-bold mb-2">77</div>
              <div className="text-sm">จังหวัด</div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-bold mb-2">1000+</div>
              <div className="text-sm">สถานที่ท่องเที่ยว</div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-bold mb-2">40M+</div>
              <div className="text-sm">นักท่องเที่ยว/ปี</div>
            </div>
          </div>
        </div>

        {/* Right image - ซ่อนบนมือถือ */}
        <div className="hidden md:flex-1 md:block max-w-lg w-full rounded-xl overflow-hidden mt-8 md:mt-0 max-h-[600px]">
          <img
            src="/Thailand.png"
            alt="Thailand"
            className="w-full h-full object-contain rounded-xl"
            loading="lazy"
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce pointer-events-none">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
