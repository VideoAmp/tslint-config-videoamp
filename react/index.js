module.exports = {
    extends: [
        require.resolve("../index"),
        require.resolve("tslint-react")
    ],
    rules: {
        "export-name": false,
        "no-this-assignment": false,
        "jsx-no-multiline-js": false,
        "jsx-boolean-value": false,
        "react-this-binding-issue": false,
        "jsx-wrap-multiline": false,
        "no-any": false
    }
}
