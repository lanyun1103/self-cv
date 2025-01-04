module.exports = {
  apps: [
    {
      name: "self-cv",
      script: "npm run start:prod",
      args: "start",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "production"
      }
    },
  ],
};
