"use client";

// Modern header with functional navigation
function Header({ activeSection, onNavigate }) {
  const navItems = [
    { id: "home", label: "หน้าแรก", labelEn: "Home" },
    { id: "destinations", label: "สถานที่ท่องเที่ยว", labelEn: "Destinations" },
    { id: "contact", label: "ติดต่อ", labelEn: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-lg z-50 border-b border-blue-100">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">🇹🇭</span>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                ท่องเที่ยวไทย
              </h1>
              <p className="text-xs text-slate-500">Discover Thailand</p>
            </div>
          </div>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                suppressHydrationWarning
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  activeSection === item.id
                    ? "text-blue-600 bg-blue-50"
                    : "text-slate-700 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                <span className="block text-sm">{item.label}</span>
                <span className="block text-xs text-slate-500">
                  {item.labelEn}
                </span>
                {activeSection === item.id && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"></div>
                )}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
