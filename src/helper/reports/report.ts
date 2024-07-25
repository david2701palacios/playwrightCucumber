const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "test-results",
  reportPath: "test-results/reports/",
  reportName: "Playwright automation report",
  pageTitle: "DemoBlaze automatition test report",
  metadata: {
    browser: {
      name: "chrome",
    },
    device: "Local test machine",
    platform: {
      name: "windows",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "Demo Blaze test - Playwright + Cucumber" },
    ],
  },
});
