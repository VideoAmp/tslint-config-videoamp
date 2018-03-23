module.exports = {
    extends: [
        "tslint:latest",
        require.resolve("tslint-consistent-codestyle"),
        require.resolve("tslint-eslint-rules"),
        require.resolve("tslint-microsoft-contrib"),
        require.resolve("tslint-config-prettier")
    ],
    rules: {
        "missing-jsdoc": false,
        "no-relative-imports": false,
        "member-access": [true, "no-public"],
        "variable-name": [true, "ban-keywords", "check-format", "allow-pascal-case"],
        "interface-name": false,
        "mocha-no-side-effect-code": false,
        "chai-vague-errors": false,
        "no-suspicious-comment": false,
        "no-multiline-string": false,
        "function-name": false,
        "import-name": false,
        "no-submodule-imports": false,
        "match-default-export-name": false,
        "no-backbone-get-set-outside-model": false
    }
}
