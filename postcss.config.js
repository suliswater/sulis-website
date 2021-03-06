module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === "production"
      ? {
          "@fullhuman/postcss-purgecss": {
            content: [
              "./components/**/*.js",
              "./pages/**/*.js",
              "./pages/**/*.tsx",
              "./components/**/*.tsx",
              "./pages/**/*.ts",
              "./components/**/*.ts",
            ],
            defaultExtractor: (content) =>
              content.match(/[\w-/:]+(?<!:)/g) || [],
          },
        }
      : {}),
  },
};
