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
              
               AxeReports.processResults(results, 'csv', 'test', true);

        });
    });

