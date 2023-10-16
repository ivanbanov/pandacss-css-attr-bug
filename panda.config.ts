import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  clean: true,
  eject: true,
  exclude: [],
  include: ['./src/**/*.{ts,tsx}'],
  jsxFramework: 'react',
  // none and minimal generates a css="[object Object]" in the DOM
  jsxStyleProps: 'minimal',
  outdir: 'styled-system',
  preflight: false,
  presets: [],
})
