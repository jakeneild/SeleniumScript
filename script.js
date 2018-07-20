const { Builder, By, Key, until } = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('firefox').build();
  try {
    await driver.get('http://www.facebook.com/');
    let login = {
      email: "",
      pass: "",
      submit: "",
      getLogin: function () {
        login.email = driver.findElement(By.id('email'))
        login.pass = driver.findElement(By.id('pass'))
        login.submit = driver.findElement(By.id('loginbutton'))
      },
      enterValues: function () {
        login.email.sendKeys('jakeneildfb@yahoo.com');
        login.pass.sendKeys('jakeneildfacebookrocks2');

      },
      submitRun: function () {
        login.submit.click();
      }
    }

    await login.getLogin();
    await login.enterValues();
    await login.submitRun();

    await driver.wait(until.titleIs('Facebook'), 1000);

    await driver.get('http://www.facebook.com/jakeneild')

    await driver.wait(until.titleIs('Jake Neild'), 1000);

    let usedATagClasses = []

    let angryReact = function () {
      let aTags = await driver.findElements(By.xpath("//a"));

      let hoverOver = function(element){

      }

      let findAngryReact = function(){

      }

      let clickAngry = function(){

      }

      let filterATags = async function (aTags) {
        let myArr = []
        for (let i = 0; i < aTags.length; i++) {
          let myClass = await aTags[i].getAttribute("class")

          if (myClass.includes("Like") && !usedATagClasses.includes(myClass)) {
            usedATagClasses.push(myClass)
            await hoverOver(aTags[i]);
            let angryTarget = await findAngryReact()
            await clickAngry(angryTarget);

          }
        }
      }

      let likeButtons = await filterATags(aTags)

    }

    //console.log(likeButtons)

  } finally {
    await driver.quit();
  }
})();

console.log("check")