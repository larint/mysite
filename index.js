"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cookie_session_1 = __importDefault(require("cookie-session"));
const path_1 = __importDefault(require("path"));
const method_override_1 = __importDefault(require("method-override"));
const socket_1 = require("./backend/services/socket");
const routes_1 = require("./backend/routes");
require("./backend/services/db");
const app = express_1.default();
let http = require("http").Server(app);
app.set("socketService", new socket_1.Socket(http));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(cookie_parser_1.default());
app.use(method_override_1.default('_method'));
app.use(cookie_session_1.default({ secret: "bbjfhsbdfjhbdfjh", maxAge: 7 * 24 * 60 * 60 * 1000 }));
app.use(/\/(app.js|package.json)/, (req, res, next) => {
    res.sendStatus(404);
});
app.use(express_1.default.static(path_1.default.join(__dirname, 'frontend', 'build')));
app.use('/api', routes_1.apiRoute);
app.all('/*', (req, res) => {
    return res.json({ error: 'invalid api request' });
});
app.use((err, req, res, next) => {
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    return res.json({ error: 'error' });
});
http.listen(process.env.PORT || 5050, () => {
    console.log('listening @ 3000', new Date());
});
http.timeout = 900000;
