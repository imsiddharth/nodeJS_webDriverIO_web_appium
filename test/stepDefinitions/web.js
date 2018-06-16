import {defineSupportCode} from 'cucumber';
import googleSearch from '../pageobjects/web/google-search.page'
import gmail from '../pageobjects/web/gmail-login.page'

defineSupportCode(function ({Given}) {

    Given(/^I am on the gmail home page$/, function () {
        gmail.open();
        // browser.getTitle().should.include('Gmail');
    });

    Given(/^I am on the google home page$/, function () {
        googleSearch.open();
        // browser.getTitle().should.include('Gmail');
    });

});


defineSupportCode(function ({When}) {

    When(/^I login with "([^"]*)" and "([^"]*)"$/, function (email, password) {
        gmail.login(email, password);
    });


    When(/^I search for "([^"]*)"$/, function (search) {
        googleSearch.doSearch(search);
    });


});


defineSupportCode(function ({Then}) {

    Then(/^I verify logged in user$/, function () {

    });

    Then(/^I verify "([^"]*)" on result page$/, function (message) {

    });
});
