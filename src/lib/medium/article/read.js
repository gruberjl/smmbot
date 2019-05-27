import {By, Key} from 'selenium-webdriver'

const isBottomOfPage = async (driver) => {
  return await driver.executeScript('if (document.body.scrollHeight == window.innerHeight + window.scrollY) { return true; } else { return false; }')
}

const randomNum = (low, high) => {
  return Math.floor(Math.random() * (high - low + 1) + low)
}

const readUntilEnd = (driver, waitMin=1, waitMax=3) => new Promise(async (res) => {
  const timeout = (new Date().getTime()) + (1000 * 60)
  const body = await driver.findElement(By.css('body'))
  let isBottom = false

  while (!isBottom) {
    await driver.sleep(randomNum(waitMin, waitMax) * 1000)
    await body.sendKeys(Key.PAGE_DOWN)
    isBottom = await isBottomOfPage(driver)
    if (new Date().getTime() > timeout) isBottom = true
  }

  res()
})

const clap = async (driver, clapMin=10, clapMax=25) => {
  try {
    const times = randomNum(clapMin,clapMax)

    const url = await driver.getCurrentUrl().toString()
    if (url.includes('/topics/')) return

    const clapBtn = await driver.findElement(By.css('.postActions .clapButton'))
    await driver.executeScript('(document.getElementsByClassName(\'clapButton\')[0]).scrollIntoView()')
    const body = await driver.findElement(By.css('body'))
    await body.sendKeys(Key.ARROW_UP)
    await body.sendKeys(Key.ARROW_UP)
    await body.sendKeys(Key.ARROW_UP)
    await body.sendKeys(Key.ARROW_UP)
    await body.sendKeys(Key.ARROW_UP)

    for (let i = 0; i < times; i++) {
      await driver.sleep(250)
      await clapBtn.click()
    }

    await driver.sleep(1000)
  } catch (e) {
    const url = await driver.getCurrentUrl()
    console.log(`Error clapping on ${url}.`)
  }
}

const followAuthor = async (browser) => {
  const btn = await browser.findElement(By.css('.js-cardUser .button--follow')).catch(() => undefined)
  if (!btn) return

  const txt = await btn.getText()
  if (txt == 'Follow') {
    try {
      await btn.click()
    } catch (e) {} // eslint-disable-line
  }

}

export const read = async (browser, url, numOfClaps, doFollowAuthor = true) => {
  await browser.get(url)
  await readUntilEnd(browser)
  await clap(browser, numOfClaps, numOfClaps)
  if (doFollowAuthor) await followAuthor(browser)
}
