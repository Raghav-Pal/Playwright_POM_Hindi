exports.LoginPage = class LoginPage {

    constructor(page) {
        this.page = page
        this.username_textbox = page.getByLabel('Username')
        this.passwrod_textbox = page.getByLabel('Password')
        this.login_button = page.getByRole('button', { name: 'Login' })
    }

    async goto(){
        await this.page.goto('https://the-internet.herokuapp.com/login');
    }
    async login(username, password){

        await this.username_textbox.fill(username)
        await this.passwrod_textbox.fill(password)
        await this.login_button.click()
    }
}