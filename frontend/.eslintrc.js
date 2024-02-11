module.exports = {
    extends: [
        "react-app",
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:react-hooks/recommended",
    ],
    rules: {
        "react/react-in-jsx-scope": "off",
        "arrow-body-style": ["error", "as-needed"],
        "import/order": ["error", {
            "groups": [["builtin", "external"], "internal", ["sibling", "parent"]],
            "pathGroups": [
                {
                    "pattern": "react",
                    "group": "external",
                    "position": "before"
                }
            ],
            "pathGroupsExcludedImportTypes": ["react"],
            "newlines-between": "always",
            "alphabetize": {
                "order": "asc",
                "caseInsensitive": true
            }
        }]
    },
    overrides: [],
};
