import { Router } from "express";
import webRouter from './web'

let apiWebRoute = Router()

apiWebRoute.use('/', webRouter)

export { apiWebRoute }
