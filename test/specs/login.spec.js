describe('', () => {
    it('Efetuar login valido', async () => {
        await browser.url('https://web.zenvia.com/zenvia-conversion/login')
        await $('[data-test-id="btnSubmitLogin"]').click()
        
        await expect(browser).toHaveUrl(expect.stringContaining('auth0Client'))

        await $('[id="email_signin"]').setValue('nazarenomaldonado.r@gmail.com')
        await $('.button.is-primary.is-fullwidth').click()

        await expect(browser).toHaveUrl(expect.stringContaining('eyJuYW1lIjoiYXV0aDAtcmVhY3QiLCJ2ZXJzaW9uIjoiMS44LjAifQ'))

        await $('[id="password_signin"]').setValue('Sirena32!')

        await $('[id="btn-signin"]').click()

        await expect(browser).toHaveUrl(expect.stringContaining('/zenvia-conversion/callback/zenvia'))

        await browser.pause(15000)

        await expect(browser).toHaveUrl(expect.stringContaining('/zenvia-conversion/manager/overview'))

        await browser.pause(15000)

    });

});