"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const express_session_1 = __importDefault(require("express-session"));
const morgan_1 = __importDefault(require("morgan"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const method_override_1 = __importDefault(require("method-override"));
const common_1 = require("./backend/middleware/common");
const socket_1 = require("./backend/services/socket");
const routes_1 = require("./backend/routes");
require("./backend/services/db");
const app = express_1.default();
let http = require("http").Server(app);
app.set("socketService", new socket_1.Socket(http));
var appLogStream = fs_1.default.createWriteStream(path_1.default.join(__dirname, 'backend/log/app.log'), { flags: 'a' });
app.use(morgan_1.default('combined', { stream: appLogStream, skip: (req, res) => { return res.statusCode < 400; } }));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(cookie_parser_1.default());
app.use(method_override_1.default('_method'));
app.use(express_session_1.default({ secret: "bjhbahsbdjabwdhjbwjdh", resave: true, saveUninitialized: true, cookie: { maxAge: 7 * 24 * 60 * 60 * 1000 } }));
app.use(express_1.default.static(path_1.default.join(__dirname)));
app.use(common_1.middlewareGlobal);
app.use(/\/(app.js|package.json)/, (req, res, next) => {
    res.sendStatus(404);
});
app.use('/api', routes_1.router);
app.use((err, req, res, next) => {
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    return res.json({ error: 'error' });
});
app.all('*', function (req, res) {
    return res.json({ error: '404' });
});
http.listen(process.env.PORT || 3000, () => {
    console.log('listening @ 3000', new Date());
});
http.timeout = 900000;
