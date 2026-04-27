import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { plugin as a2aPlugin } from './src/shell/middleware/a2a'

// https://vite.dev/config/ — a2a 미들웨어는 `vite dev`에서만 `/a2a` → 로컬 에이전트 프록시 (google/A2UI samples/client/react/shell)
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    a2aPlugin(),
  ],
  optimizeDeps: {
    include: ['@a2ui/react', 'react', 'react-dom'],
  },
})
