# WCAG Thai Tourism Landing Page Workshop

## ภาพรวม Workshop

โปรเจกต์นี้เป็น Workshop สำหรับการเรียนรู้มาตรฐาน Web Content Accessibility Guidelines (WCAG) ผ่านการแก้ไขข้อบกพร่องด้าน Accessibility ในเว็บไซต์ Landing Page ธีมสถานที่ท่องเที่ยวในประเทศไทย โดยมีเป้าหมายให้เว็บนี้ ใช้งานได้สำหรับผู้พิการหลายกลุ่ม เช่น ผู้พิการทางสายตา ผู้พิการทางการได้ยิน ผู้พิการทางการเคลื่อนไหว และผู้ที่มีความบกพร่องในการเรียนรู้

### มาตรฐาน WCAG ที่เกี่ยวข้อง

- **WCAG 2.1 Level AA** - มาตรฐานที่แนะนำสำหรับเว็บไซต์ทั่วไป
- **4 หลักการหลัก:**
  - **Perceivable** - ผู้ใช้สามารถรับรู้เนื้อหาได้
  - **Operable** - ผู้ใช้สามารถใช้งานได้
  - **Understandable** - ผู้ใช้เข้าใจเนื้อหาและการใช้งาน
  - **Robust** - เนื้อหาทำงานได้กับเทคโนโลยีช่วยเหลือ

# ข้อผิดพลาด Accessibility ที่ต้องแก้ไข

## 1. รูปภาพไม่มี Alt Text

**ปัญหา:** รูปภาพไม่มี `alt` attribute ทำให้ screen reader ไม่สามารถรู้ได้ว่าอ่านรูปอะไรอยู่   
**ช่วยผู้พิการกลุ่ม:** ผู้พิการทางสายตา ใช้ screen reader  
**ตำแหน่งในเว็บ:** Destinations cards  
**ไฟล์ที่มีปัญหา:**

- `src/components/Destinations.jsx` (บรรทัดที่ 52)  
  **วิธีแก้:**

```jsx
// ตัวอย่าง ข้อมูล
  const destinations = [
  {
    name: "เชียงใหม่",
    nameEn: "Chiang Mai",
    altText: "วัดพระธาตุดอยสุเทพและภูเขาในเชียงใหม่ เมืองเก่าแก่แห่งวัฒนธรรมล้านนา", 
    image: "/chiang-mai-temple-mountains.png",
    highlights: ["วัดพระธาตุดอยสุเทพ", "ตลาดวอร์กกิ้งสตรีท", "ช้างแสนรู้"],
  },
  ...
];
// ❌ ผิด
<img
  src={dest.image || "/placeholder.svg"}
  className="..."
/>

// ✅ ถูก
<img
  src={dest.image || "/placeholder.svg"}
  alt={dest.altText} // <----- เพิ่ม บรรทัดนี้
  className="..."
/>
```

## 2. สีที่มี Contrast ต่ำเกินไป

**ปัญหา:** ข้อความสีเทาบนพื้นหลังขาว (ratio < 4.5:1)  
**ช่วยผู้พิการกลุ่ม:** ผู้พิการทางสายตา, ผู้มีความบกพร่องด้านการมองเห็นสี  
**ตำแหน่ง:** ข้อมูล สถิติ  
**ไฟล์ที่มีปัญหา:**
- `src/components/Hero.jsx` (บรรทัดที่ 56)  
  **วิธีแก้:**

```jsx
// ❌ ผิด - contrast ratio 2.69:1
<div
  style={{ color: "#5C7EDB" }}
  className="..."
>

// ✅ ถูก - contrast ratio 7:1
<div
  style={{ color: "#DDE4F9" }}
  className="..."
>

```

## 3. Form ไม่มี Label

**ปัญหา:** Input fields ไม่มี label หรือ aria-label  
**ช่วยผู้พิการกลุ่ม:** ผู้พิการทางสายตา ใช้ screen reader  
**ตำแหน่ง:** Contact form  
**ไฟล์ที่มีปัญหา:**

- `src/components/Contact.jsx` (บรรทัดที่ 64)  
  **วิธีแก้:**

```jsx
// ❌ ผิด
<input type="text" placeholder="ชื่อของคุณ" />

// ✅ ถูก
<label htmlFor="name">ชื่อของคุณ</label>
<input type="text" id="name" placeholder="ชื่อของคุณ" />

// หรือ
<input type="text" aria-label="ชื่อของคุณ" placeholder="ชื่อของคุณ" />
```

## 4. โครงสร้าง Heading ผิดลำดับ

**ปัญหา:** ข้าม heading levels (h1 → h4, h5 → h2)  
**ช่วยผู้พิการกลุ่ม:** ผู้พิการทางสายตา ใช้ screen reader  
**ตำแหน่ง:** Hero section, Destinations  
**ไฟล์ที่มีปัญหา:**

- `src/components/Hero.jsx` (บรรทัดที่ 64)
- `src/components/Destinations.jsx` (บรรทัดที่ 32)  
  **วิธีแก้:**

```jsx
// ❌ ผิด
<h4>หัวข้อหลัก</h4>
<h1>หัวข้อรอง</h1>

// ✅ ถูก
<h1>หัวข้อหลัก</h1>
<h2>หัวข้อรอง</h2>
```

## 5. ไม่มี Focus Indicators

**ปัญหา:** Elements ที่โฟกัสได้ไม่มี visual indicator  
**ช่วยผู้พิการกลุ่ม:** ผู้พิการทางการเคลื่อนไหว ใช้คีย์บอร์ดแทนเมาส์  
**ตำแหน่ง:** ทุก interactive elements  
**ไฟล์ที่มีปัญหา:**

- `src/components/Hero.jsx` (บรรทัดที่ 64)
- `src/components/Destinations.jsx` (บรรทัดที่ 32)  
  **วิธีแก้:**

```css
/* ❌ ผิด */
*:focus {
  outline: none;
}

/* ✅ ถูก */
*:focus {
  outline: 2px solid #0066cc;
  outline-offset: 2px;
}
```

## 6. ใช้ Div แทน Semantic Elements

**ปัญหา:** ใช้ `<div>` แทน `<nav>`, `<header>`, `<footer>`  
**ช่วยผู้พิการกลุ่ม:** ผู้พิการทางสายตา ใช้ screen reader  
**ตำแหน่ง:** Header, Footer components  
**ไฟล์ที่มีปัญหา:**

- `src/components/Hero.jsx` (บรรทัดที่ 64)
- `src/components/Destinations.jsx` (บรรทัดที่ 32)  
  **วิธีแก้:**

```jsx
// ❌ ผิด
<div className="header">
  <div>Navigation items</div>
</div>

// ✅ ถูก
<header>
  <nav>Navigation items</nav>
</header>
```

## 7. ปุ่ม Icon-only ไม่มี Accessible Name

**ปัญหา:** Social media icons ไม่มีข้อความอธิบาย  
**ช่วยผู้พิการกลุ่ม:** ผู้พิการทางสายตา ใช้ screen reader  
**ตำแหน่ง:** Footer social icons  
**ไฟล์ที่มีปัญหา:**

- `src/components/Footer.jsx` (บรรทัดที่ 64)
  **วิธีแก้:**

```jsx
// ❌ ผิด
<div className="social-icon"></div>

// ✅ ถูก
<button aria-label="ติดตาม Facebook">
  <FacebookIcon />
</button>
```

---

## การทดสอบ

1. ใช้ keyboard navigation (Tab, Enter, Space) → ผู้พิการทางการเคลื่อนไหว
2. ทดสอบกับ screen reader (NVDA, JAWS, VoiceOver) → ผู้พิการทางสายตา
3. ตรวจสอบ color contrast → ผู้พิการทางสายตา, ผู้มีความบกพร่องด้านการมองเห็นสี
4. ทดสอบการ zoom ถึง 200% → ผู้มีความบกพร่องด้านการมองเห็น
5. ตรวจสอบ focus indicators → ผู้พิการทางการเคลื่อนไหว

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
