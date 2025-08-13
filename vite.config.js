import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],
  server: {
    port: 4000, // เปลี่ยน port ตรงนี้
    strictPort: true // ถ้า port นี้ถูกใช้งานอยู่ ให้ error ไปเลย จะได้รู้
  }
})
