const { remote } = require('webdriverio')

it('Sample test case', async function(){
    const browser = await remote()

    await browser.url('https://en.wikipedia.org/wiki/Software_testing')

    await browser.saveScreenshot('./screenshot.png')
    await browser.deleteSession()

});
