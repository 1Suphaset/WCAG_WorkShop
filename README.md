# WCAG Thai Tourism Landing Page Workshop

## ภาพรวม Workshop

โปรเจกต์นี้เป็น Workshop สำหรับการเรียนรู้มาตรฐาน Web Content Accessibility Guidelines (WCAG) ผ่านการแก้ไขข้อบกพร่องด้าน Accessibility ในเว็บไซต์ Landing Page ธีมสถานที่ท่องเที่ยวในประเทศไทย

### มาตรฐาน WCAG ที่เกี่ยวข้อง

- **WCAG 2.1 Level AA** - มาตรฐานที่แนะนำสำหรับเว็บไซต์ทั่วไป
- **4 หลักการหลัก:**
  1. **Perceivable** - ผู้ใช้สามารถรับรู้เนื้อหาได้
  2. **Operable** - ผู้ใช้สามารถใช้งานได้
  3. **Understandable** - ผู้ใช้เข้าใจเนื้อหาและการใช้งาน
  4. **Robust** - เนื้อหาทำงานได้กับเทคโนโลยีช่วยเหลือ

## การติดตั้งและรันโปรเจกต์

\`\`\`bash
# Clone หรือ download โปรเจกต์
cd wcag-thai-tourism-landing

# ติดตั้ง dependencies
npm install

# รันโปรเจกต์
npm run dev

# เปิดเบราว์เซอร์ไปที่ http://localhost:5173
\`\`\`

## เครื่องมือตรวจสอบ Accessibility

### 1. Chrome Lighthouse
1. เปิด Chrome DevTools (F12)
2. ไปที่แท็บ "Lighthouse"
3. เลือก "Accessibility" 
4. คลิก "Generate report"

### 2. axe DevTools Extension
1. ติดตั้ง [axe DevTools](https://chrome.google.com/webstore/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd)
2. เปิด DevTools > แท็บ "axe DevTools"
3. คลิก "Scan ALL of my page"

### 3. WAVE Web Accessibility Evaluator
1. ติดตั้ง [WAVE Extension](https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh)
2. คลิกไอคอน WAVE ในเบราว์เซอร์

## ข้อผิดพลาด Accessibility ที่ต้องแก้ไข

### 1. รูปภาพไม่มี Alt Text
**ปัญหา:** รูปภาพไม่มี `alt` attribute
**ตำแหน่ง:** Hero section, Destinations cards
**วิธีแก้:**
\`\`\`jsx
// ❌ ผิด
<img src="image.jpg" />

// ✅ ถูก
<img src="image.jpg" alt="วัดพระแก้วในกรุงเทพฯ" />
\`\`\`

### 2. สีที่มี Contrast ต่ำเกินไป
**ปัญหา:** ข้อความสีเทาบนพื้นหลังขาว (ratio < 4.5:1)
**ตำแหน่ง:** Navigation, buttons, descriptions
**วิธีแก้:**
\`\`\`css
/* ❌ ผิด - contrast ratio 2.3:1 */
.poor-contrast-text {
  color: #aaaaaa;
}

/* ✅ ถูก - contrast ratio 7:1 */
.good-contrast-text {
  color: #333333;
}
\`\`\`

### 3. Form ไม่มี Label
**ปัญหา:** Input fields ไม่มี label หรือ aria-label
**ตำแหน่ง:** Contact form
**วิธีแก้:**
\`\`\`jsx
// ❌ ผิด
<input type="text" placeholder="ชื่อของคุณ" />

// ✅ ถูก
<label htmlFor="name">ชื่อของคุณ</label>
<input type="text" id="name" placeholder="ชื่อของคุณ" />

// หรือ
<input type="text" aria-label="ชื่อของคุณ" placeholder="ชื่อของคุณ" />
\`\`\`

### 4. โครงสร้าง Heading ผิดลำดับ
**ปัญหา:** ข้าม heading levels (h1 → h4, h5 → h2)
**ตำแหน่ง:** Hero section, Destinations
**วิธีแก้:**
\`\`\`jsx
// ❌ ผิด
<h4>หัวข้อหลัก</h4>
<h1>หัวข้อรอง</h1>

// ✅ ถูก
<h1>หัวข้อหลัก</h1>
<h2>หัวข้อรอง</h2>
\`\`\`

### 5. ไม่มี Focus Indicators
**ปัญหา:** Elements ที่โฟกัสได้ไม่มี visual indicator
**ตำแหน่ง:** ทุก interactive elements
**วิธีแก้:**
\`\`\`css
/* ❌ ผิด */
*:focus {
  outline: none;
}

/* ✅ ถูก */
*:focus {
  outline: 2px solid #0066cc;
  outline-offset: 2px;
}
\`\`\`

### 6. ใช้ Div แทน Semantic Elements
**ปัญหา:** ใช้ `<div>` แทน `<nav>`, `<header>`, `<footer>`
**ตำแหน่ง:** Header, Footer components
**วิธีแก้:**
\`\`\`jsx
// ❌ ผิด
<div className="header">
  <div>Navigation items</div>
</div>

// ✅ ถูก
<header>
  <nav>Navigation items</nav>
</header>
\`\`\`

### 7. ปุ่ม Icon-only ไม่มี Accessible Name
**ปัญหา:** Social media icons ไม่มีข้อความอธิบาย
**ตำแหน่ง:** Footer social icons
**วิธีแก้:**
\`\`\`jsx
// ❌ ผิด
<div className="social-icon"></div>

// ✅ ถูก
<button aria-label="ติดตาม Facebook">
  <FacebookIcon />
</button>
\`\`\`

## ตัวอย่างโค้ดที่แก้ไขแล้ว

### Header Component (แก้ไขแล้ว)
\`\`\`jsx
function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          🇹🇭 ท่องเที่ยวไทย
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#home" className="hover:text-blue-200 focus:outline-2 focus:outline-white">หน้าแรก</a></li>
            <li><a href="#destinations" className="hover:text-blue-200 focus:outline-2 focus:outline-white">สถานที่ท่องเที่ยว</a></li>
            <li><a href="#contact" className="hover:text-blue-200 focus:outline-2 focus:outline-white">ติดต่อ</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
\`\`\`

## การทดสอบ

1. ใช้ keyboard navigation (Tab, Enter, Space)
2. ทดสอบกับ screen reader (NVDA, JAWS, VoiceOver)
3. ตรวจสอบ color contrast
4. ทดสอบการ zoom ถึง 200%
5. ตรวจสอบ focus indicators

## เป้าหมายการเรียนรู้

หลังจากทำ Workshop นี้เสร็จ ผู้เรียนจะสามารถ:
- เข้าใจหลักการ WCAG 2.1
- ใช้เครื่องมือตรวจสอบ accessibility
- แก้ไขปัญหา accessibility พื้นฐาน
- เขียนโค้ดที่เป็นมิตรกับผู้ใช้ทุกกลุ่ม

## ทรัพยากรเพิ่มเติม

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [A11y Project Checklist](https://www.a11yproject.com/checklist/)
