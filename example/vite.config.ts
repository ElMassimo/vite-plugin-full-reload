import { defineConfig } from 'vite'
import reloadOnChange from 'vite-plugin-full-reload'

export default defineConfig({
  plugins: [
    reloadOnChange(['README.md', '../README.md'], { delay: 100 }),
  ],
})
