// Modern footer with proper semantic HTML and accessibility
function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "เกี่ยวกับเรา", href: "#about" },
      { name: "บริการ", href: "#services" },
      { name: "ทีมงาน", href: "#team" },
      { name: "ข่าวสาร", href: "#news" },
    ],
    destinations: [
      { name: "เชียงใหม่", href: "#chiang-mai" },
      { name: "ภูเก็ต", href: "#phuket" },
      { name: "อยุธยา", href: "#ayutthaya" },
      { name: "กรุงเทพฯ", href: "#bangkok" },
    ],
    support: [
      { name: "ช่วยเหลือ", href: "#help" },
      { name: "นโยบายความเป็นส่วนตัว", href: "#privacy" },
      { name: "เงื่อนไขการใช้งาน", href: "#terms" },
      { name: "ติดต่อเรา", href: "#contact" },
    ],
  };

  const socialLinks = [
    {
      name: "Facebook",
      href: "#facebook",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "#instagram",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323C6.001 8.198 7.152 7.708 8.449 7.708s2.448.49 3.323 1.416c.875.926 1.365 2.077 1.365 3.374s-.49 2.448-1.365 3.323c-.875.875-2.026 1.167-3.323 1.167z" />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "#twitter",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "#youtube",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 to-blue-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">🇹🇭</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">ท่องเที่ยวไทย</h3>
                <p className="text-blue-200 text-sm">Discover Thailand</p>
              </div>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              ค้นพบความงามของประเทศไทยไปกับเรา
              พร้อมบริการที่ดีที่สุดและประสบการณ์ที่น่าจดจำ
            </p>

            {/* Social links */}
            <div>
              <h4 className="font-semibold mb-4 text-blue-200">ติดตามเรา</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={`ติดตาม ${social.name}`}
                    className="w-10 h-10 bg-white/10 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Company links */}
          <div>
            <h4 className="font-semibold mb-6 text-blue-200">บริษัท</h4>
            <nav>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-slate-300 hover:text-white transition-colors duration-300 focus:outline-none focus:text-blue-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="font-semibold mb-6 text-blue-200">จุดหมายปลายทาง</h4>
            <nav>
              <ul className="space-y-3">
                {footerLinks.destinations.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-slate-300 hover:text-white transition-colors duration-300 focus:outline-none focus:text-blue-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-6 text-blue-200">ช่วยเหลือ</h4>
            <nav>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-slate-300 hover:text-white transition-colors duration-300 focus:outline-none focus:text-blue-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Newsletter signup */}
        <div className="border-t border-slate-700 pt-8 mb-8">
          <div className="max-w-md mx-auto text-center">
            <h4 className="font-semibold mb-4 text-blue-200">
              รับข่าวสารและโปรโมชั่น
            </h4>
            <div className="flex gap-3">
              <input
                suppressHydrationWarning
                suppressHydrationWarning
                type="email"
                placeholder="อีเมลของคุณ"
                className="flex-1 px-4 py-3 bg-white/10 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
              <button
                suppressHydrationWarning
                className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                สมัคร
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-700 pt-8 text-center">
          <p className="text-slate-400">
            © {currentYear} ท่องเที่ยวไทย. สงวนลิขสิทธิ์ทุกประการ | Made with ❤️
            in Thailand
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
