const { test, expect } = require('@playwright/test');

//Variables para la Precondición
const userName = '00100000045';
const userPassword = 'Prueba01*';


// Precondición
test.beforeEach('iniciar sesion', async ({ page }) => {
    await page.goto('https://dev.app.netcore.do/');
    await page.getByPlaceholder('Cédula o pasaporte').click();
    await page.getByPlaceholder('Cédula o pasaporte').fill(userName);
    await page.getByRole('button', { name: 'Continuar' }).click();
    await page.getByPlaceholder('Contraseña').fill(userPassword);
    await page.getByRole('button', { name: 'Continuar' }).click();
});

// Caso de prueba
test.describe('toda la prueba', () => {
    test('crear activo', async ({ page }) => {
        await page.goto('https://dev.app.netcore.do/#/app/dashboard');
        await page.locator('div').filter({ hasText: /^Activos$/ }).locator('i').click();
        await page.getByRole('button', { name: 'Crear nuevo' }).click();
        await page.locator('.col-lg-6 > .form-control-solid > .ng-select-container > .ng-value-container > .ng-input > input').first().click();
        await page.getByRole('option', { name: 'Equipo Informático' }).click();
        await page.locator('.col-lg-6 > .form-control').first().click();
        await page.locator('.col-lg-6 > .form-control').first().fill('laptop');
        await page.locator('.col-lg-6 > .input-group > .form-control').first().click();
        await page.getByLabel('martes, 3 de septiembre de').getByText('3').click();
        await page.locator('.col-lg > .row > div:nth-child(4) > .form-control').click();
        await page.locator('.col-lg > .row > div:nth-child(4) > .form-control').fill('1,2000');
        await page.locator('.col-lg > .row > div:nth-child(5) > .form-control').click();
        await page.locator('.col-lg > .row > div:nth-child(5) > .form-control').fill('1234');
        await page.locator('div:nth-child(6) > .form-control').click();
        await page.locator('div:nth-child(6) > .form-control').fill('dell');
        await page.locator('div:nth-child(7) > .form-control').click();
        await page.locator('div:nth-child(7) > .form-control').fill('latitude6789');
        await page.locator('div:nth-child(8) > .form-control').click();
        await page.locator('div:nth-child(8) > .form-control').fill('123456');
        await page.getByRole('dialog').locator('ng-select').filter({ hasText: /^Seleccionar$/ }).getByRole('textbox').click();
        await page.getByRole('option', { name: 'CECOMSA' }).click();
        await page.locator('div:nth-child(10) > .input-group > .form-control').click();
        await page.getByLabel('martes, 3 de septiembre de').getByText('3').click();
        await page.getByRole('button', { name: 'Guardar' }).click();
        await page.getByRole('button', { name: 'Completar' }).click();
        await expect(page.locator('Activo creado de forma satisfactoria')).toBeVisible()
    });
});