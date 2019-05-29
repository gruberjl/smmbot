module.exports = {
  apps : [{
    name: 'smmbot',
    script: 'dist/index.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: '',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  // deploy : {
  //   production : {
  //     user : 'node',
  //     host : 'github.com',
  //     ref  : 'origin/master',
  //     repo : 'git@github.com:gruberjl/smmbot.git',
  //     path : '/var/www/production',
  //     'post-deploy' : 'npm install && npm run build && pm2 reload ecosystem.config.js --env production'
  //   }
  // }
}
