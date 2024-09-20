const { expect } = require('@playwright/test');

const BasePage = require("./base.page");

class LoginPage extends BasePage{
    constructor(page){
        super(page);
        this.username_input = page.getByPlaceholder('Cédula o pasaporte');
    }

    async login(username){
        await this.writeText(this.username_input, username)
        await elementHandle.isDisabled();
    }
    
}

module.exports = LoginPage;