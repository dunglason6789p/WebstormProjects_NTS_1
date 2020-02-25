module.exports = {
    apps : [{
        name: 'myapp3',
        script: 'dist/bundle.js',

        // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
        //args: 'myarg-one myarg-two',
        // node_args: "--debug=7000",
        instances: 2,
        exec_mode: "cluster",
        autorestart: true,
        watch: false,
        max_memory_restart: '1G',
        env: {
            NODE_ENV: 'development',
            NODE_OPTIONS: '--debug=7000'
        },
        env_production: {
            NODE_ENV: 'production',
            NODE_OPTIONS: '--debug=7000'
        }
    }],

    deploy : {
        production : {
            user : 'node',
            host : '212.83.163.1',
            ref  : 'origin/master',
            repo : 'git@github.com:repo.git',
            path : '/var/www/production',
            'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
        }
    }
};
