import { expect } from "@playwright/test";
import { pageFixture } from "../hooks/pageFixture";

export default class RegisterPage {



    private Elements = {
        signUpBtn: "//a[contains(text(),'Sign up')]",
        userNameInput: "#sign-username",
        passwordInput: "#sign-password",
        createAcccountBtn: "//button[text()='Sign up']",
    }



    async registerUser(userName: string, password: string) {
        await pageFixture.page.click(this.Elements.signUpBtn);
        await pageFixture.page.fill(this.Elements.userNameInput,userName);
        await pageFixture.page.fill(this.Elements.passwordInput,password);
        await pageFixture.page.click(this.Elements.createAcccountBtn);
    }

    async validateSignUp() {
        await pageFixture.page.on('dialog', dialog => expect(dialog.message()).toBe("Sign up successful."))
    }

}
