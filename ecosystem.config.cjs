module.exports = {
  apps: [
    {
      name: "pro-hr-landing-page",
      port: "3053",
      instances: 1,
      script: "./.output/server/index.mjs",
    },
  ],
};
