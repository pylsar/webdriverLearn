// const webdriver = require('selenium-webdriver');
// const chrome = require('selenium-webdriver/chrome');
// const firefox = require('selenium-webdriver/firefox')

// var By = webdriver.By;
// var until = webdriver.until;
 
// let driver = new webdriver.Builder() .forBrowser(webdriver.Browser.FIREFOX).build();

// driver.get('http://library-app.firebaseapp.com') ;


// driver.findElements(By.css('input'));



// driver.sleep(10000);
// driver.quit();



const { Builder, Browser, By, Key, until } = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser(Browser.FIREFOX).build()
  try {
    await driver.get('http://library-app.firebaseapp.com')
    await driver.findElement(By.className('lead')).sendKeys('webdriver', Key.RETURN)
    await driver.wait(until.titleIs('Demo Home Page'), 1000)
  } finally {
    await driver.quit()
  }
})()