//Env
require('dotenv').config()
import express from 'express'
import { Request, Response, NextFunction, ErrorRequestHandler } from 'express'
import cookieParser from 'cookie-parser'
import session from 'cookie-session'
import morgan from 'morgan'
import fs from 'fs'
import path from 'path'
import methodOverride from 'method-override'
// import { middlewareNoAuth } from './backend/middleware/auth'
// import { middlewareGlobal } from './backend/middleware/common'
import { Socket } from './backend/services/socket'

// ROUTER
import { router } from './backend/routes'

import './backend/services/db'

declare module 'express-session' {
	export interface SessionData {
		user: any
		message: any
	}
}

const app = express()
app.set('trust proxy', 1);
// Real-time notification updates
let http = require("http").Server(app)

app.set("socketService", new Socket(http))
var appLogStream = fs.createWriteStream(path.join(__dirname, 'backend/log/app.log'), { flags: 'a' })
app.use(morgan('combined', { stream: appLogStream, skip: (req, res) => { return res.statusCode < 400 } }))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(methodOverride('_method'))
// session expire time after 7 days (milliseconds)
app.use(session({ secret: "bbjfhsbdfjhbdfjh", maxAge: 7 * 24 * 60 * 60 * 1000 }))
app.use(express.static(path.join(__dirname)))

// pass user to all template
// app.use(middlewareGlobal)

// catch 404 and forward to error handler
app.use(/\/(app.js|package.json)/, (req: Request, res: Response, next: NextFunction) => {
	res.sendStatus(404)
})

// app.use('/statistic', middlewareNoAuth, statisticRouter)
app.use('/api', router)

// error handler
app.use((err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => {
	// set locals, only providing error in development
	// res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {}

	// render the error page
	// res.status(err.status || 500);
	return res.json({ error: 'error' })
});

app.all('*', function (req, res) {
	return res.json({ error: '404' })
});

http.listen(process.env.PORT || 5050, () => {
	console.log('listening @ 3000', new Date())
})
http.timeout = 900000 //15 minute
