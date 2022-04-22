"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
class Auth {
}
exports.Auth = Auth;
_a = Auth;
Auth.authenticate = async (credential) => {
    return false;
};
Auth.comparePassword = async (data, hash) => {
    return await bcrypt_1.default.compare(data, hash);
};
