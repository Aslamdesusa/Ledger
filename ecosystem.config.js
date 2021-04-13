module.exports = {
    apps: [{
        name: "[Calculator] Ledger",
        script: "./server.js",
        exec_mode: "fork",
        env: {
            NODE_ENV: "development"
        },
        env_production: {
            NODE_ENV: "production"
        }
    }]
}