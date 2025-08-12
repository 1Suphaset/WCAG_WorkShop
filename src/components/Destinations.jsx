// Modern destinations section with proper accessibility
function Destinations() {
  const destinations = [
    {
      name: "เชียงใหม่",
      nameEn: "Chiang Mai",
      description: "เมืองโบราณที่เต็มไปด้วยวัดสวยงามและวัฒนธรรมล้านนา",
      descriptionEn:
        "Ancient city filled with beautiful temples and Lanna culture",
      image: "/chiang-mai-temple-mountains.png",
      highlights: ["วัดพระธาตุดอยสุเทพ", "ตลาดวอร์กกิ้งสตรีท", "ช้างแสนรู้"],
    },
    {
      name: "ภูเก็ต",
      nameEn: "Phuket",
      description: "เกาะสวรรค์แห่งทะเลอันดามันที่มีหาดทรายขาวสะอาด",
      descriptionEn:
        "Paradise island in the Andaman Sea with pristine white beaches",
      image: "/phuket-beach-clear-water.png",
      highlights: ["หาดป่าตอง", "เกาะพีพี", "วิวพอยต์"],
    },
    {
      name: "อยุธยา",
      nameEn: "Ayutthaya",
      description: "อดีตราชธานีที่เต็มไปด้วยซากปรักหักพังทางประวัติศาสตร์",
      descriptionEn:
        "Former capital filled with historical ruins and ancient temples",
      image: "/ayutthaya-buddha-ruins.png",
      highlights: ["วัดมหาธาตุ", "วัดไชยวัฒนาราม", "พระราชวังบางปะอิน"],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            สถานที่ท่องเที่ยวยอดนิยม
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            ค้นพบจุดหมายปลายทางที่น่าตื่นตาตื่นใจทั่วประเทศไทย
          </p>
          <p className="text-lg text-slate-500 mt-2">
            Discover amazing destinations across Thailand
          </p>
        </div>

        {/* Destinations grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest, index) => (
            <article
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={dest.image || "/placeholder.svg"}
                  alt={`${dest.name} - ${dest.nameEn}: ${dest.descriptionEn}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-blue-600">
                    {dest.nameEn}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-slate-800">
                  {dest.name}
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {dest.description}
                </p>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-500 mb-2 uppercase tracking-wide">
                    ไฮไลท์
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {dest.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full border border-blue-100"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  suppressHydrationWarning
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 group"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <span>ดูรายละเอียด</span>
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
              </div>
            </article>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <button
            suppressHydrationWarning
            className="px-8 py-4 border-2 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white rounded-xl font-semibold transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            ดูสถานที่ท่องเที่ยวทั้งหมด
          </button>
        </div>
      </div>
    </section>
  );
}

export default Destinations;
