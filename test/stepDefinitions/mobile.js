import { defineSupportCode } from 'cucumber';



defineSupportCode(function({ Then }) {

    Then(/^I open the mobile APP$/,function () {
       browser.pause(10000);
       console.log("\n\n\n\n\nThis is my world\n\n\n\n\n ");
    });

    Then(/^I click on next$/, function(){
        // const abc = browser.element("//android.widget.TextView[@resource-id='com.timsu.astrid:id/next']");
        browser.click("//android.widget.TextView[@resource-id='com.timsu.astrid:id/next']");
        browser.pause(1000);
        browser.click("//android.widget.TextView[@resource-id='com.timsu.astrid:id/next']");
        browser.pause(1000);
        browser.click("//android.widget.TextView[@resource-id='com.timsu.astrid:id/next']");
        browser.pause(1000);
        browser.click("//android.widget.TextView[@resource-id='com.timsu.astrid:id/next']");
        browser.pause(1000);
        browser.click("//android.widget.TextView[@resource-id='com.timsu.astrid:id/next']");
        browser.pause(1000);
        browser.click("//android.widget.TextView[@resource-id='com.timsu.astrid:id/next']");
        browser.pause(1000);

        browser.pause(1000);
    });

    Then(/^I click on default login$/, function(){
        // const abc = browser.element("//android.widget.TextView[@resource-id='com.timsu.astrid:id/next']");
        browser.click("//android.widget.Button[@resource-id='com.timsu.astrid:id/quick_login_google']");
        browser.pause(3000);

    });


});
