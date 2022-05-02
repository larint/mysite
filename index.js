"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const express_session_1 = __importDefault(require("express-session"));
const path_1 = __importDefault(require("path"));
const method_override_1 = __importDefault(require("method-override"));
const cors_1 = __importDefault(require("cors"));
require("./backend/utility/db");
const socket_1 = require("./backend/services/socket");
const admin_1 = require("./backend/routes/admin");
const web_1 = require("./backend/routes/web");
const celebrate_1 = require("celebrate");
const app = (0, express_1.default)();
let http = require("http").Server(app);
app.set("socketService", new socket_1.Socket(http));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cookie_parser_1.default)());
app.use((0, method_override_1.default)('_method'));
app.use((0, express_session_1.default)({ secret: "bjhbahsbdjabwdhjbwjdh", resave: true, saveUninitialized: true, cookie: { maxAge: 7 * 24 * 60 * 60 * 1000 } }));
const corsOptions = {
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'X-Access-Token', 'Authorization'],
    credentials: true,
    methods: 'GET,HEAD,OPTIONS,PUT,POST,DELETE',
    origin: process.env.ENV == 'development' ? "http://localhost:3000" : `https://${process.env.SITE_URI}`,
    preflightContinue: false,
};
app.disable("x-powered-by");
app.use((0, cors_1.default)(corsOptions));
app.use(/\/(app.js|package.json)/, (req, res, next) => {
    res.sendStatus(404);
});
app.use(express_1.default.static(path_1.default.join(__dirname, 'frontend', 'build')));
app.use('/api', web_1.apiWebRoute);
app.use('/api/ad', admin_1.apiAdminRoute);
app.all('/api/*', (req, res) => {
    return res.json({ error: 'invalid api request' });
});
app.all('/api/ad/*', (req, res) => {
    return res.json({ error: 'invalid api request' });
});
app.get('/*', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, 'frontend', 'build', 'index.html'), function (err) {
        if (err) {
            res.status(500).send(err);
        }
    });
});
app.use((0, celebrate_1.errors)());
app.use((err, req, res, next) => {
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    return res.json({ error: 'error' });
});
http.listen(process.env.PORT || 5050, () => {
    console.log(`listening @ ${process.env.PORT}`, new Date());
});
http.timeout = 900000;
