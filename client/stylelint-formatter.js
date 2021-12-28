const stylelintReporter = require("stylelint-html-reporter");
const reporter = stylelintReporter({
  filename: "./dist/reports/lint/stylelint-report.html"
});

/**
 * @type {import('stylelint').Formatter}
 */
module.exports = reporter;
