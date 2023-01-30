const path = require("path");

module.exports = {
  reactStrictMode: true,
  distDir: path.join("./", "build"),
  env: {
    custom_environment_variable: "value",
  },

  // webpack: (config) => {
  //   config.module.rules.push({
  //     test: /\.svg$/i,
  //     use: ["@svgr/webpack"],
  //   });
  //   return config;
  // },
  async rewrites() {
    console.log(process.env.REACT_STRICT_MODE);
    return [
      {
        source: "/api/v1/:path*",
        // destination: "https://10.15.100.31:8443/api/v1/:path*",
        // destination: "http://10.15.100.31:8082/api/v1/:path*",
        destination: "https://m.choroc.com/api/v1/:path*",
      },
    ];
  },
};
