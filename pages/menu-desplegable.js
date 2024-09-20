const { expect } = require('@playwright/test');

const BasePage = require("./base.page");

class MenuDesplegable extends BasePage {
    constructor(page) {
        super(page);
        this.option_dropdows1 = page.getByPlaceholder('Select fruit');
        this.option_dropdows2 = page.locator('select[id="fruits"]');
    }

    //id="fruits"

    async seleccionar(opcion) {
        //await this.selectText(this.option_dropdows1)
        //const frutas = await page.$("#fruits");
        await this.option_dropdows2.selectOption(opcion);
    }
    
}

module.exports = MenuDesplegable;