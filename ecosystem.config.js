module.exports = {
    apps: [{
        name: `Reservoir Sync Node - Mintify`,
        exec_mode: "fork",
        script: "yarn start",
        instances: 1
    }]
}