import { Router } from "express";
import homeRouter from './home'

let apiRoute = Router()

apiRoute.use('/', homeRouter)

export { apiRoute }
