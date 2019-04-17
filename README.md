

## Getting Started

Install [Node.js](https://docs.npmjs.com/getting-started/installing-node) if you haven't already. For running axe-webdriverjs tests read more about [setting up your environment](CONTRIBUTING.md).

> Download and install any necessary browser drivers on your machine's PATH. [More on Webdriver setup](https://seleniumhq.github.io/docs/wd.html).

Install Selenium Webdriver: `npm install selenium-webdriver --no-save`

Install axe-webdriverjs and its dependencies: `npm install axe-webdriverjs`

## Usage

This module uses a chainable API to assist in injecting, configuring and analyzing using aXe with Selenium WebDriverJS. As such, it is required to pass an instance of WebDriver.

Here is an example of a script that will drive Selenium to this repository, perform analysis and then log results to the console.

```javascript
var AxeBuilder = require('axe-webdriverjs');
var WebDriver = require('selenium-webdriver');

var driver = new WebDriver.Builder()
  .forBrowser('firefox')
  .build();

driver
  .get('https://dequeuniversity.com/demo/mars/')
  .then(function() {
    AxeBuilder(driver).analyze(function(err, results) {
      if (err) {
        // Handle error somehow
      }
      console.log(results);
    });
  });
```

Another example inside the included index.js contains axe reports module integrations to output eithercsv or tsv file format for possible data archiving

```javascript
var AxeBuilder = require('axe-webdriverjs'),
    AxeReports = require('axe-reports'),
    webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

    var os = require('os'); os.tmpDir = os.tmpdir;

var driver = new webdriver.Builder()
    .forBrowser('chrome') //or firefox or whichever driver you use
    .build();

var AXE_BUILDER = AxeBuilder(driver)
    .withTags(['wcag2a', 'wcag2aa']); // specify your test criteria 

driver.get('https://digital.canada.ca/');
driver.wait(until.titleIs('Home - Canadian Digital Service'), 1000)
    .then(function () {
        AXE_BUILDER.analyze(function (err,results) {
            if (err) {
                // Handle error somehow
              }  
               AxeReports.processResults(results, 'csv', 'test-report', true);
        });
    });


```


### Installing

Install aXe Reports

```
npm install axe-reports
```

### This will install all the following Prerequisites

Selenium WebDriver

Require

aXe Core

aXe WebDriver JavaScript

aXe Reports

## Usage

**Create a Results File**

Version 1.1.x supports independent results file creation

```
AxeReports.processResults(results, fileType, fileName, [createNewReport])

object results = aXe results object

string fileType = file extension (only 'csv' and 'tsv' are supported)

string fileName = name of file (i.e. test-results) without file extension

boolean createNewReport = tells file writer to start a new file or not
```

**OR**

Use a create report header row function to start a report; this creates the report header row.

```
AxeReports.createCsvReportHeaderRow();
```

**OR**

```
AxeReports.createTsvReportHeaderRow();
```

To create the rest of the report, call the create report row function passing the results object from the analyze function to create the rest of the report

```
AxeReports.createCsvReportRow(results);
```

**OR**

```
AxeReports.createTsvReportRow(results);
```

**ADDITIONALLY**

You can create an entire report with one call

```
AxeReports.createCsvReport(results);
```

**OR**

```
AxeReports.createTsvReport(results);
```
