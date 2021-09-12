//Env
require('dotenv').config()
import express from 'express'
import { Request, Response, NextFunction, ErrorRequestHandler } from 'express'
import cookieParser from 'cookie-parser'
import session from 'cookie-session'
import path from 'path'
import methodOverride from 'method-override'
import cors from 'cors'
import './backend/utility/db'
// import { middlewareNoAuth } from './backend/middleware/auth'
// import { middlewareGlobal } from './backend/middleware/common'
import { Socket } from './backend/services/socket'

// ROUTER
import { apiAdminRoute } from './backend/routes/admin'
import { apiWebRoute } from './backend/routes/web'

declare module 'express-session' {
	export interface SessionData {
		user: any
		message: any
		captcha: string
	}
}

const app = express()
// Real-time notification updates
let http = require("http").Server(app)

app.set("socketService", new Socket(http))
// var appLogStream = fs.createWriteStream(path.join(__dirname, 'backend/log/app.log'), { flags: 'a' })
// app.use(morgan('combined', { stream: appLogStream, skip: (req, res) => { return res.statusCode < 400 } }))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(methodOverride('_method'))
// session expire time after 7 days (milliseconds)
app.use(session({ secret: "bbjfhsbdfjhbdfjh", maxAge: 7 * 24 * 60 * 60 * 1000 }))

// pass user to all template
// app.use(middlewareGlobal)

//cors
const corsOptions = {
	allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'X-Access-Token', 'Authorization'],
	credentials: true,
	methods: 'GET,HEAD,OPTIONS,PUT,POST,DELETE',
	origin: process.env.ENV == 'development' ? "http://localhost:3000" : `https://${process.env.SITE_URI}`,
	preflightContinue: false,
};
app.disable("x-powered-by")
app.use(cors(corsOptions));

// catch 404 and forward to error handler
app.use(/\/(app.js|package.json)/, (req: Request, res: Response, next: NextFunction) => {
	res.sendStatus(404)
})

// use for get static resources react
app.use(express.static(path.join(__dirname, 'frontend', 'build')))
// router
app.use('/api', apiWebRoute)
app.use('/api/ad', apiAdminRoute)
app.all('/api/*', (req, res) => {
	return res.json({ error: 'invalid api request' })
});
app.all('/api/ad/*', (req, res) => {
	return res.json({ error: 'invalid api request' })
});
app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'), function (err) {
		if (err) {
			res.status(500).send(err);
		}
	});
});

// error handler
app.use((err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => {
	// set locals, only providing error in development
	// res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {}

	// render the error page
	// res.status(err.status || 500);
	return res.json({ error: 'error' })
})

http.listen(process.env.PORT || 5050, () => {
	console.log(`listening @ ${process.env.PORT}`, new Date())
})
http.timeout = 900000 //15 minute