// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js", // ✅ flowbite only, not flowbite-react
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'), // ✅ Only use plugin from flowbite
  ],
};
