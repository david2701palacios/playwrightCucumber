import { Before, When, Then } from "@cucumber/cucumber";
import RegisterPage from "../../pages/registerPage";
import {generateRandomInteger} from "../../helper/utils/utils";
import { expect } from "@playwright/test";
let registerPage: RegisterPage;

Before(async () => {
    registerPage = new RegisterPage();
});

When('User fills out the registration information', async function (dataTable) {
    const userName = dataTable.rawTable[0][0]+ generateRandomInteger(999999999);
    const password = dataTable.rawTable[0][1] 
    await registerPage.registerUser(userName,password)
  });

Then('User is register successfully', async function () {
    registerPage.validateSignUp()
  });