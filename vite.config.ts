import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [tsconfigPaths()],
  server: {
    port: 3000
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    onConsoleLog: () => false,
    coverage: {
      include: ['src/components/*']
    }
  }
})
