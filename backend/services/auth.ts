import bcrypt from "bcrypt"
import { Credentials } from "../utility/type";

class Auth {

    static authenticate = async (credential: Credentials) => {
        return false
    }

    static comparePassword = async (data: string, hash: string) => {
        return await bcrypt.compare(data, hash);
    }
}

export { Auth }
