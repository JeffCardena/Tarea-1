import { test, expect } from '@playwright/test';

const LoginPage = require('../pages/login.page')

const username = '00100000045';
const baseUrl = 'https://dev.app.netcore.do/';

test('iniciar sesion ', async ({page}) => {
    const loginpage = new LoginPage(page)
    await loginpage.navigate(baseUrl);
    await loginpage.login(username);
})