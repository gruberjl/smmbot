export const destroy = async (driver) => {
  await driver.quit()
  driver = null
  return true
}
