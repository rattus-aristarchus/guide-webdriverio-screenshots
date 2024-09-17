const { remote } = require('webdriverio')

it('Sample test case', async function(){
    const browser = await remote({
        capabilities: {
            browserName: 'chrome',
            'goog:chromeOptions': {
                args: process.env.CI ? ['headless', 'disable-gpu'] : []
            }
        }
    })

    await browser.url('https://en.wikipedia.org/wiki/Software_testing')

    await browser.saveScreenshot('./screenshot.png')
    await browser.deleteSession()
    
});
