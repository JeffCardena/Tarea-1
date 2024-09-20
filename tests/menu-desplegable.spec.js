import { test, expect } from '@playwright/test';

const MenuDesplegable = require('../pages/menu-desplegable');

const opcion = 'Orange';
const baseUrl = 'https://letcode.in/dropdowns';

test('seleccionar un dropdown', async ({page}) => {
    const menudesplegable = new MenuDesplegable(page)
    await menudesplegable.navigate(baseUrl);
    await menudesplegable.seleccionar(opcion);
})

