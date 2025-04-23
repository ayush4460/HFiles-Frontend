/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",       // ✅ update this
    "./src/components/**/*.{js,ts,jsx,tsx}", // ✅ in case you add components
    "./src/**/*.{js,ts,jsx,tsx}",            // ✅ fallback for any TS/JS in src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
