module.exports={
    default: {
        format: "src/reports/allure-reporter.ts",
        formatOptions: {
                links: [
                  {
                    pattern: [/@issue=(.*)/],
                    type: "issue",
                    urlTemplate: "https://example.com/issues/%s",
                    nameTemplate: "Issue: %s",
                  },
                  {
                    pattern: [/@tms=(.*)/],
                    type: "tms",
                    urlTemplate: "https://example.com/tasks/%s",
                  },
                ],
              },
        tags: process.env.npm_config_TAGS || "", 
        formatOptions: {
            snippetInterface: "async-await"
        },
        paths: [
            "src/test/features/*.feature"
        ],

        dryRun: false,
        require: [
            "src/test/steps/*.ts",
            "src/hooks/hooks.ts"
        ],
        requireModule: [
            "ts-node/register"
        ],
        format: [
            "html:test-results/cucumber-report.html",
            "progress-bar",
            "json:test-results/cucumber-report.json",
            "rerun:@rerun.txt"
        ],
        parallel: 1,
        retry: 1,
    },
    rerun : {
        formatOptions: {
            snippetInterface: "async-await"
        },
        dryRun: false,
        require: [
            "src/test/steps/*.ts",
            "src/hooks/hooks.ts"
        ],
        requireModule: [
            "ts-node/register"
        ],
        format: [
            "html:test-results/cucumber-report.html",
            "progress-bar",
            "json:test-results/cucumber-report.json",
            "rerun:@rerun.txt"
        ],
        parallel: 2
    }
}