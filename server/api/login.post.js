import { User } from "../models/user.model"

export default defineEventHandler(async (event) => {

    try {
        const { email, password } = await readBody(event)

        if (email != '' & password != '') {
            const user = await User.find({ email: email })

            if (user[0].password === password) {
                return "login successfull"
            } else {
                return "invalid arguments or data missing"
            }
        } else {
            return { msg: "data required" }
        }

    } catch (error) {
        console.log(error)
        return error
    }



})