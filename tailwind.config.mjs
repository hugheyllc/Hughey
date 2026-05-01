/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: 'var(--ink)',
        navy: 'var(--navy)',
        mid: 'var(--mid)',
        gold: 'var(--gold)',
        gl: 'var(--gl)',
        gcream: 'var(--gcream)',
        amber: 'var(--amber)',
        cream: 'var(--cream)',
        page: 'var(--page)',
        text: 'var(--text)',
        sub: 'var(--sub)',
        dim: 'var(--dim)',
        border: 'var(--border)',
        ok: 'var(--ok)',
      },
      fontFamily: {
        sans: ['var(--f)', 'sans-serif'],
        serif: ['var(--s)', 'serif'],
        condensed: ['var(--b)', 'sans-serif'],
        sig: ['var(--sig)', 'cursive'],
      },
    },
  },
  plugins: [],
};
