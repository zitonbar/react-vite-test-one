import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({mode}) => ({
  // 開發中、產品路徑
  base: mode === 'production' ? '/react-vite-test-one/' : '/' ,
  plugins: [react()],
}))