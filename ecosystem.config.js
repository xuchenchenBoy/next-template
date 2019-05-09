module.exports = {
  apps : [{
    name: "next-template",
    script: "server.js",
    instances: "max",
    watch: false,
    max_memory_restart: "1G",
    exec_mode: "cluster",
    instance_var: "INSTANCE_ID",
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }],

  // deploy : {
  //   production : {
  //     user: "node",
  //     host: "212.83.163.1",
  //     ref: "origin/master",
  //     repo: "git@github.com:repo.git",
  //     path: "/var/www/production",
  //     "post-deploy": "npm install && pm2 reload ecosystem.config.js --env production"
  //   }
  // }
};
