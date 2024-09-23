
const { Builder, By, Key, until } = require('selenium-webdriver');

(async function checkElements() {
	// Создаем экземпляр драйвера
	let driver = await new Builder().forBrowser('chrome').build(); // или другой браузер

	try {
		// Открываем нужный URL
		await driver.get('https://incity.ru/incity/');

		await driver.findElement(By.css('.btn-search')).click();
		let inputField = await driver.wait(until.elementIsVisible(driver.findElement(By.id('title-search-input'))), 1000);

		// Очищаем поле ввода (если нужно) и вставляем значение
		await inputField.clear(); // очистка поля
		await inputField.sendKeys('Шапка-бини'); // вставка значения
		await inputField.sendKeys(Key.ENTER);
	} finally {
		// Закрываем драйвер после завершения
		await driver.quit();
	}
})();