import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    watch: false,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      thresholds: {
        branches: 70,
        lines: 70,
      },
    },
  },
});