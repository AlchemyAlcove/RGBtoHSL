module.exports = {
  "extends": "standard",
  "globals": {
    "document": true,
    "window": true,
    "FileReader": true,
    "FormData": true
  },
  "plugins": [
      "standard",
      "node",
      "import",
      "promise",
      "react"
  ],
  "rules": {
    "space-before-function-paren": ["error", "never"],
    "semi": ["error", "always"],
    "quotes": ["error", "double"],
    "keyword-spacing": ["error", {"before": true, "after": false, "overrides": {"else": {"after": true}, "from": {"after": true}, "import": {"after": true}, "case": {"after": true}}}],
    "space-unary-ops": [2, {"words": true, "nonwords": false, "overrides": {"typeof": false}}],
    "react/jsx-uses-vars": [2],
    "no-template-curly-in-string": "off",
    "standard/no-callback-literal": "off",
    "eol-last": 0
  }
};