import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'


// https://vitejs.dev/config/
export default defineConfig({

  server: {
    proxy: {
      "/api": {
        target: "file:///C:/Users/Hitesh%20Dhiman/OneDrive/Desktop/three.js/ARshopping/index.html",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },

  plugins: [react()],
    
})

 