import { Router } from "express";
import homeRouter from './home'

let apiAdminRoute = Router()

apiAdminRoute.use('/', homeRouter)

export { apiAdminRoute }
