import {By} from 'selenium-webdriver'

const openCompose = async (browser) => {
  const btns = await browser.findElements(By.css('.tab-item'))

  for (let i=0; i< btns.length; i++) {
    const composeIcon = await btns[i].findElement(By.css('.compose-icon')).catch(() => undefined)

    if (composeIcon) {
      await btns[i].click()
      await browser.sleep(1000)
      return true
    }
  }

  return false
}

const selectMagazine = async (browser, magazineTitle) => {
  const magazines = await browser.findElements(By.css('.magazine-selection__magazine'))

  for (let i=0; i< magazines.length; i++) {
    const title = await magazines[i].getText()
    if (title == magazineTitle) {
      await magazines[i].click()
      return true
    }
  }

  return false
}

const setUrl = async (browser, url) => {
  const textBox = await browser.findElement(By.css('textarea.share-flip__input'))
  await textBox.sendKeys(url)
}

const setDescription = async (browser, description) => {
  const textBoxes = await browser.findElements(By.css('textarea.share-flip__input'))
  if (textBoxes.length == 2)
    await textBoxes[1].sendKeys(description)
}

const submitFlip = async (browser) => {
  const btn = await browser.findElement(By.css('.share-flip__button-primary'))
  await btn.click()
}

export const flip = async (browser, url, magazineTitle = 'Transform and Improve Your Life', description) => {
  await browser.get('https://flipboard.com/')

  const modalOpen = await openCompose(browser)
  if (!modalOpen) return

  const magazineSelected = await selectMagazine(browser, magazineTitle)
  if (!magazineSelected) return

  await setUrl(browser, url)
  if (description) await setDescription(browser, description)

  await submitFlip(browser)
  await browser.sleep(1500)
}
