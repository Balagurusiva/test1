import { User } from "../models/user.model"

export default defineEventHandler(async (event) => {
    try {
        const { name, email, password } = await readBody(event)
        if (name !== "" & email !== "" & password !== "") {
            const user = await User.create({
                name, email, password
            })
            return "login succesfull"
        } else {
            return "invalid arguments or data missing"
        }
    } catch (error) {
        console.log("error from registration api >>" + error)
        return error
    }




    // try {
    //     const { name, email, password } = JSON.parse(await readBody(event))
    //     if (name !== "" & email !== "" & password !== "") {
    //         const user = await User.create({
    //             name, email, password
    //         })
    //         //return { msg: "login succesfull" }
    //         return "login succesfull"
    //     } else {

    //         return "invalid arguments or data missing"
    //     }
    // } catch (error) {
    //     console.log("error from registration api >>" + error)
    //     return error
    // }
})