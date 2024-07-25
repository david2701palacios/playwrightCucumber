
var reporter = require('cucumber-html-reporter');
const fs = require('fs');

const metadata = JSON.parse(fs.readFileSync('./test-results/metadata.json'));
var options = {
        theme: 'bootstrap',
        name: "Demoblaze Web",
        columnLayout: 1,
        brandTitle: "Playwright + Cucumber Test",
        jsonFile: 'test-results/cucumber-report.json',
        output: 'test-results/cucumber-report-boostrap.html',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: false,
        metadata: metadata,
        failedSummaryReport: true,
    };

    reporter.generate(options);
    