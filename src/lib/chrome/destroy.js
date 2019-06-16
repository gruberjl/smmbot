import chromedriver from 'chromedriver'
import sleep from 'await-sleep'

export const destroy = async (driver) => {
  await driver.close()
  await driver.quit()
  await chromedriver.stop()
  await sleep(5000)
  driver = null
  return true
}
