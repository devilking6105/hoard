describe('Login Workflow', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('LoginText'))).toBeVisible();
    await expect(element(by.text('Log In'))).toBeVisible();

    await expect(element(by.id('UsernameInput'))).toBeVisible();
    await element(by.id('UsernameInput')).tap();
    await element(by.id('UsernameInput')).replaceText('test');

    await expect(element(by.id('PasswordInput'))).toBeVisible();

    await element(by.id('PasswordInput')).tap();
    await element(by.id('PasswordInput')).replaceText('test');

    await expect(element(by.id('LoginButton'))).toBeVisible();
    await element(by.id('LoginButton')).tap();
  });
});
