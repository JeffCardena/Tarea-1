class BasePage {
    constructor(page) {
        this.page = page;
    }

    async navigate(url) {
        await this.page.goto(url);
    }

    async getTitle() {
        return await this.page.title();
    }
    
    async writeText(element, text) {
        return await element.fill(text);
    }

    async selectText(element, op) {
        return await element.click(op);
    }

}

module.exports = BasePage;