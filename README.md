### Prerequisites

Selenium WebDriver

Require

aXe Core

aXe WebDriver JavaScript

```
npm install selenium-webdriver

npm install require

npm install axe-core

npm install axe-webdriverjs
```

### Installing

Install aXe Reports

```
npm install axe-reports
```

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
