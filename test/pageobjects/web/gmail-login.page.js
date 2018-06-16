import Page from "./page";


class GoogleLoginPage extends Page {


    /**
     * define or overwrite page methods
     */

    get signIn() {return browser.element('.gmail-nav__nav-link__sign-in')}
    get email() { return browser.element('//input[@type=\'email\']') }
    get next() {return browser.element('//span[text()=\'Next\']')}
    get password() {return browser.element('//input[@type=\'password\']')}


    open()
    {
        super.open('http://www.gmail.com');
        browser.pause(2000);
        if(this.signIn.isVisible()){
            this.signIn.click();
            browser.pause(2000);
        }
    }

    login(user,password){
        this.email.isVisible();
        this.email.setValue(user);
        this.next.click();
        this.password.setValue(password);
        this.next.click();

    }

}

export default new GoogleLoginPage();
