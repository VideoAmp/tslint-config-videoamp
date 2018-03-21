module.exports = {
    extends: [
        require.resolve("../index"),
        require.resolve("tslint-react")
    ],
    rules: {
        "export-name": false
    }
}
