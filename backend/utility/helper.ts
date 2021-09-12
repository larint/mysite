import { Request } from 'express'
import * as fs from 'fs'
import * as path from 'path'
import bcrypt from 'bcrypt'
import util from 'util'

export function makeid(length: number = 4) {
    var result = ''
    var characters = 'abcdefghijklmnopqrstuvwxyz0123456789'
    var charactersLength = characters.length
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result
}