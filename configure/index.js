var configure = {
    development:require("./development.json"),
    test:require("./test.json"),
    production:require("./production.json")
};

module.exports = configure[process.env.NODE_ENV || "development"];