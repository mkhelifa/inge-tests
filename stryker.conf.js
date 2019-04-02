module.exports = function(config) {
  config.set({
    mutator: 'javascript',
    packageManager: 'npm',
    reporters: ['html', 'clear-text', 'progress', 'dashboard'],
    testRunner: 'jest',
    transpilers: [],
    coverageAnalysis: 'off',
    thresholds: {
      break: 60 // Fail if mutation score < 70
      // ..
    }
  });
};
