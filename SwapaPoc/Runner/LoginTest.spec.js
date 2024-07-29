"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
    * @description      : Validate Login Page
    * @author           :
    * @group            :
    * @created          : 28/07/2024 - 14:18:02
    *
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 28/07/2024
    * - Author          :
    * - Modification    :
**/
const test_1 = require("@playwright/test");
const LoginPage_spec_1 = __importDefault(require("../Pages/LoginPage.spec"));
(0, test_1.test)('Validate LoginPage Test_001', (_a) => __awaiter(void 0, [_a], void 0, function* ({ page }) {
    const login = new LoginPage_spec_1.default(page);
    yield page.goto('https://qa.swapa.org/');
    yield login.clickSignIn();
    yield login.enterUserName("112298849");
    yield login.enterPassword("swapa8849");
    yield login.clickLoginButton();
}));
