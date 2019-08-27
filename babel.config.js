module.exports = function (api) {
  api.cache(true)
  return {
    presets: [
      "@babel/preset-env",
      '@babel/preset-react',
      '@babel/preset-typescript',
    ],
    plugins: [
      "@babel/plugin-proposal-export-default-from",
      "@babel/plugin-proposal-export-namespace-from",
      "@babel/plugin-proposal-nullish-coalescing-operator",
      "@babel/plugin-proposal-object-rest-spread",
      "@babel/plugin-proposal-optional-chaining",
      "@babel/plugin-proposal-partial-application",
      ["@babel/plugin-proposal-pipeline-operator", {proposal: 'minimal'}],
    ]
  }
}
